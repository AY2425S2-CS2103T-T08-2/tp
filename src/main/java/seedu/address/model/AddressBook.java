package seedu.address.model;

import static java.util.Objects.requireNonNull;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;

import javafx.collections.ObservableList;
import seedu.address.commons.util.ToStringBuilder;
import seedu.address.model.booking.Booking;
import seedu.address.model.booking.Status;
import seedu.address.model.person.Person;
import seedu.address.model.person.UniquePersonList;

/**
 * Wraps all data at the address-book level
 * Duplicates are not allowed (by .isSamePerson comparison)
 */
public class AddressBook implements ReadOnlyAddressBook {

    private final UniquePersonList persons;

    // TODO: should we use the same style as UniquePersonList? Or no need.
    private HashMap<Integer, Booking> bookings;

    /*
     * The 'unusual' code block below is a non-static initialization block, sometimes used to avoid duplication
     * between constructors. See https://docs.oracle.com/javase/tutorial/java/javaOO/initial.html
     *
     * Note that non-static init blocks are not recommended to use. There are other ways to avoid duplication
     *   among constructors.
     */
    {
        persons = new UniquePersonList();
        bookings = new HashMap<>();
    }

    public AddressBook() {}

    /**
     * Creates an AddressBook using the Persons in the {@code toBeCopied}
     */
    public AddressBook(ReadOnlyAddressBook toBeCopied) {
        this();
        resetData(toBeCopied);
    }

    //// list overwrite operations

    /**
     * Replaces the contents of the person list with {@code persons}.
     * {@code persons} must not contain duplicate persons.
     */
    public void setPersons(List<Person> persons) {
        this.persons.setPersons(persons);
    }

    public void setBookings(HashMap<Integer, Booking> bookings) {
        this.bookings = bookings;
    }

    /**
     * Resets the existing data of this {@code AddressBook} with {@code newData}.
     */
    public void resetData(ReadOnlyAddressBook newData) {
        requireNonNull(newData);

        setPersons(newData.getPersonList());
        setBookings(newData.getBookings());
    }

    //// person-level operations

    /**
     * Returns true if a person with the same identity as {@code person} exists in the address book.
     */
    public boolean hasPerson(Person person) {
        requireNonNull(person);
        return persons.contains(person);
    }

    /**
     * Adds a person to the address book.
     * The person must not already exist in the address book.
     */
    public void addPerson(Person p) {
        persons.add(p);
    }

    /**
     * Replaces the given person {@code target} in the list with {@code editedPerson}.
     * {@code target} must exist in the address book.
     * The person identity of {@code editedPerson} must not be the same as another existing person in the address book.
     */
    public void setPerson(Person target, Person editedPerson) {
        requireNonNull(editedPerson);

        persons.setPerson(target, editedPerson);
    }

    /**
     * Removes {@code key} from this {@code AddressBook}.
     * {@code key} must exist in the address book.
     */
    public void removePerson(Person key) {
        persons.remove(key);
    }


    /**
     * Adds a booking to the address book.
     *
     * @param booking The booking to be added.
     */
    public void addBooking(Booking booking) {
        // TODO: Verify booking is valid
        // 1. User still exists
        // 2. No duplicate booking id
        // ^ In case user alter storage.json
        bookings.put(booking.getBookingId(), booking);
    }

    /**
     * Removes a booking from the address book.
     *
     * @param bookingID The booking ID of the booking to be removed.
     */
    private void removeBooking(int bookingID) {
        bookings.remove(bookingID);
    }

    /**
     * Checks if the address book contains a booking with the given booking ID.
     *
     * @param bookingID The booking ID to be checked.
     * @return true if the address book contains a booking with the given booking ID.
     */
    public boolean hasBooking(int bookingID) {
        return bookings.containsKey(bookingID);
    }

    /**
     * Checks if the address book contains any bookings.
     * @return true if there are bookings in the address book.
     */
    public boolean hasAnyBookings() {
        return !bookings.isEmpty();
    }

    /**
     * Returns the booking with the given booking ID.
     * @param bookingID The booking ID of the booking to be retrieved.
     * @return Booking with the given booking ID.
     */
    public Booking getBooking(int bookingID) {
        return bookings.get(bookingID);
    }

    /***
     * Checks if the booking lists contains any upcoming bookings.
     *
     * @return true if there are upcoming bookings in the address book.
     */
    public boolean hasUpcomingBookings() {
        List<Booking> upcomingBookingsList = getBookingsSet().stream()
                .filter(booking -> booking.getStatus() == Status.UPCOMING)
                .toList();
        return !upcomingBookingsList.isEmpty();
    }

    /***
     * Checks if the booking lists contains any cancelled or completed bookings.
     *
     * @return true if there are cancelled or upcoming bookings in the address book.
     */
    public boolean hasCancelledOrCompletedBookings() {
        List<Booking> cancelledOrCompletedBookingsList = new ArrayList<>(bookings.values()).stream()
                .filter(booking -> booking.getStatus() != Status.UPCOMING)
                .toList();
        return !cancelledOrCompletedBookingsList.isEmpty();
    }

    /**
     * Sets the status of the booking with the given booking ID to the new status.
     *
     * @param bookingID The booking ID of the booking to be updated.
     * @param newStatus The new status of the booking.
     */
    public void setBookingStatus(int bookingID, Status newStatus) {
        bookings.get(bookingID).setStatus(newStatus);
    }

    /**
     * Returns all bookings in the address book as a string.
     *
     * @return All bookings in the address book as a string.
     */
    public String getAllBookingsAsString() {
        StringBuilder sb = new StringBuilder();
        for (Booking booking : bookings.values()) {
            sb.append(booking.toString()).append("\n");
        }
        return sb.toString();
    }

    /**
     * Returns all upcoming bookings in the address book as a string.
     *
     * @return All upcoming bookings in the address book as a string.
     */
    public String getUpcomingBookingsAsString() {
        StringBuilder sb = new StringBuilder();
        List<Booking> upcomingBookingsList = new ArrayList<>(bookings.values()).stream()
                .filter(booking -> booking.getStatus() == Status.UPCOMING)
                .toList();
        for (Booking booking : upcomingBookingsList) {
            sb.append(booking.toString()).append("\n");
        }
        return sb.toString();
    }

    /***
     * Removes all cancelled or upcoming bookings from the bookings list
     * and removes their booking IDs from the respective people.
     */
    public void clearBookings() {
        List<Booking> cancelledOrCompletedBookingsList = new ArrayList<>(bookings.values()).stream()
                .filter(booking -> booking.getStatus() != Status.UPCOMING)
                .toList();

        for (Booking booking : cancelledOrCompletedBookingsList) {
            int bookingID = booking.getBookingId();

            this.removeBooking(bookingID);
            Person person = booking.getBookingPerson();
            person.removeBookingID(bookingID);
        }
    }

    //// util methods

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .add("persons", persons)
                .toString();
    }

    @Override
    public ObservableList<Person> getPersonList() {
        return persons.asUnmodifiableObservableList();
    }

    @Override
    public Collection<Booking> getBookingsSet() {
        return bookings.values();
    }

    @Override
    public HashMap<Integer, Booking> getBookings() {
        return bookings;
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof AddressBook)) {
            return false;
        }

        AddressBook otherAddressBook = (AddressBook) other;
        return persons.equals(otherAddressBook.persons);
    }

    @Override
    public int hashCode() {
        return persons.hashCode();
    }

}
