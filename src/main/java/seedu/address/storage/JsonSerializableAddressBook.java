package seedu.address.storage;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;

import seedu.address.commons.exceptions.IllegalValueException;
import seedu.address.model.AddressBook;
import seedu.address.model.ReadOnlyAddressBook;
import seedu.address.model.booking.Booking;
import seedu.address.model.booking.UniqueBookingList;
import seedu.address.model.person.Person;

/**
 * An Immutable AddressBook that is serializable to JSON format.
 */
@JsonRootName(value = "addressbook")
class JsonSerializableAddressBook {

    public static final String MESSAGE_DUPLICATE_PERSON = "Persons list contains duplicate person(s).";
    public static final String MESSAGE_DUPLICATE_BOOKING = "Bookings list contains duplicate booking(s).";

    private final List<JsonAdaptedPerson> persons = new ArrayList<>();
    private final List<JsonAdaptedBooking> bookings = new ArrayList<>();

    /**
     * Constructs a {@code JsonSerializableAddressBook} with the given persons and bookings.
     */
    @JsonCreator
    public JsonSerializableAddressBook(@JsonProperty("persons") List<JsonAdaptedPerson> persons,
                                       @JsonProperty("bookings") List<JsonAdaptedBooking> bookings) {
        this.persons.addAll(persons);
        this.bookings.addAll(bookings);
    }


    /**
     * Converts a given {@code ReadOnlyAddressBook} into this class for Jackson use.
     *
     * @param source future changes to this will not affect the created {@code JsonSerializableAddressBook}.
     */
    public JsonSerializableAddressBook(ReadOnlyAddressBook source) {
        persons.addAll(source.getPersonList().stream().map(JsonAdaptedPerson::new).collect(Collectors.toList()));
        bookings.addAll(source.getBookingList().stream().map(JsonAdaptedBooking::new).collect(Collectors.toList()));
    }

    /**
     * Converts this address book into the model's {@code AddressBook} object.
     *
     * @throws IllegalValueException if there were any data constraints violated.
     */
    public AddressBook toModelType() throws IllegalValueException {
        AddressBook addressBook = new AddressBook();
        for (JsonAdaptedPerson jsonAdaptedPerson : persons) {
            Person person = jsonAdaptedPerson.toModelType();
            if (addressBook.hasPerson(person)) {
                throw new IllegalValueException(MESSAGE_DUPLICATE_PERSON);
            }
            addressBook.addPerson(person);
        }
        if (bookings.size() == 0) {
            return addressBook;
        }
        for (JsonAdaptedBooking jsonAdaptedBooking: bookings) {
            Booking booking = jsonAdaptedBooking.toModelType();
            int bookingId = booking.getBookingId();
            if (addressBook.hasBooking(bookingId)) {
                System.out.println("Duplicate booking id: " + bookingId);
                throw new IllegalValueException(MESSAGE_DUPLICATE_BOOKING);
            }
            //System.out.println("Adding booking id: " + bookingId);
            addressBook.addBooking(booking);
        }
        for (Person person : addressBook.getPersonList()) {
            for (int bookingId : person.getBookingIDs()) {
                if (!addressBook.hasBooking(bookingId)) {
                    throw new IllegalValueException("Person has booking id that does not exist in booking list");
                }
                Booking booking = addressBook.getUniqueBookingList().getBooking(bookingId);
                booking.setBookingPerson(person);
            }
        }

        UniqueBookingList bookingsList = addressBook.getUniqueBookingList();
        List<Booking> bookingsToDelete = new ArrayList<>();
        for (Booking booking : bookingsList) {
            if (booking.getBookingPerson() == null) {
                bookingsToDelete.add(booking);
            }
        }
        for (Booking booking : bookingsToDelete) {
            addressBook.removeBooking(booking);
        }
        return addressBook;
    }

}
