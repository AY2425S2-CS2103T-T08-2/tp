
    var pageVueRenderFn = function noop (a, b, c) {};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"user-guide"}},[_v("User Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#user-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("KrustyKrab")]),_v(" is a lightweight and responsive desktop app for "),_c('strong',[_v("restaurant staff")]),_v(" to quickly manage customer information and bookings.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Keep track of your customers' "),_c('strong',[_v("contacts")]),_v(" and "),_c('strong',[_v("bookings")]),_v(".")]),_v(" "),_c('li',[_v("Easily view all upcoming bookings at a glance through our "),_c('strong',[_v("bookings view")]),_v(".")]),_v(" "),_c('li',[_c('strong',[_v("Add, edit")]),_v(", and "),_c('strong',[_v("cancel")]),_v(" bookings with just a few keystrokes.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"quick-start"}},[_v("Quick start"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#quick-start","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Ensure you have Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("17")]),_v(" or above installed in your computer."),_c('br'),_v(" "),_c('strong',[_v("Mac users:")]),_v(" Ensure you have the precise JDK version prescribed "),_c('a',{attrs:{"href":"https://se-education.org/guides/tutorials/javaInstallationMac.html"}},[_v("here")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Download the latest "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("krustykrab.jar")]),_v(" file from "),_c('a',{attrs:{"href":"https://github.com/AY2425S2-CS2103T-T08-2/tp/releases"}},[_v("here")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Copy the file to the folder you want to use as the "),_c('em',[_v("home folder")]),_v(" for KrustyKrab.")])]),_v(" "),_c('li',[_c('p',[_v("Open a command terminal, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd")]),_v(" into the folder you put the jar file in, and use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar krustykrab.jar")]),_v(" command to run the application."),_c('br'),_v(" "),_c('strong',[_v("Example")]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd C:\\Users\\JasonLim\\KrustyHomeFolder\\")]),_c('br'),_c('br'),_v("\nA GUI similar to the below should appear in a few seconds. Note how the app contains some sample data."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/Ui.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/Ui.png","alt":"Ui"}})])])]),_v(" "),_c('li',[_c('p',[_v("Type a command in the command box and press "),_c('em',[_v("Enter")]),_v(" to execute it."),_c('br'),_v(" "),_c('strong',[_v("Example:")]),_v(" Typing "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])]),_v(" and pressing "),_c('em',[_v("Enter")]),_v(" will open the help window.")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("plist")]),_v(" : Lists all customers.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("padd n/John Doe p/98765432 e/johnd@example.com a/John street, block 123, #01-01")]),_v(" : Adds a customer named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("John Doe")]),_v(" to the customer list.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("badd d/2021-10-01 3:00 PM p/98765432 x/5")]),_v(" : Adds a booking to the customer with phone number 98765432.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" : Exits the app.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"command-overview"}},[_v("Command Overview"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-overview","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The commands you can use in KrustyKrab are split into "),_c('strong',[_v("3 different types")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"#customer-commands"}},[_v("Customer Commands")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#booking-commands"}},[_v("Booking Commands")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#general-commands"}},[_v("General Commands")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Each command consists of a "),_c('strong',[_v("command word")]),_v(", and zero or more "),_c('strong',[_v("parameters")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"customer-commands"}},[_v("Customer Commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#customer-commands","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("A customer has a "),_c('strong',[_v("name, phone number, email, address, membership status")]),_v(" and optionally, "),_c('strong',[_v("tags")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-a-customer-padd"}},[_v("Adding a customer: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("padd")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-customer-padd","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("padd n/NAME p/PHONE_NUMBER e/EMAIL a/ADDRESS [m/IS_MEMBER] [t/TAG]…​")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("padd n/John Doe p/98765432 e/johnd@example.com a/John street, block 123, #01-01 m/true")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("padd n/Betsy Crowe t/seafoodAllergy e/betsycrowe@example.com a/Cotton Candy Land p/1234567")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"editing-a-customer-pedit"}},[_v("Editing a customer: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pedit")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-a-customer-pedit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Edits the details of the customer identified by the index number in the displayed customers list."),_c('br'),_v("\nExisting values will be overwritten by the input values.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format:"),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pedit INDEX [n/NAME] [e/EMAIL] [a/ADDRESS] [m/IS_MEMBER] [t/TAG]…​")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pedit 1 e/johndoe@example.com")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pedit 3 a/123 Sunset Way m/true t/friend t/vip")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pedit 2 t/")]),_v(" (clears all tags)")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-a-customer-pdelete"}},[_v("Deleting a customer : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pdelete")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-customer-pdelete","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pdelete INDEX")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Deletes the customer at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(".")]),_v(" "),_c('li',[_v("The index refers to the index number shown in the displayed customers list.")]),_v(" "),_c('li',[_v("The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, …​")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 2")]),_v(" deletes the 2nd customer in the customers list.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find Betsy")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")]),_v(" deletes the 1st customer in the results of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" command.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"finding-customers-by-name-find"}},[_v("Finding customers by name: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#finding-customers-by-name-find","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Finds all customers whose names contain any of the specified "),_c('strong',[_v("full-word")]),_v(" keywords (case-insensitive), and displays them as a list with index numbers.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format:"),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find KEYWORD [MORE_KEYWORDS]...")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find Alice")]),_v(" (matches \"Alice Tan\", but not \"Malice\")")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find alex")]),_v(" (matches \"Alex Tan\", not \"Alexander\")")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find John")]),_v(" returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("john")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("John Doe")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find alex david")]),_v(" returns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Alex Yeoh")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("David Li")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"listing-all-customers-plist"}},[_v("Listing all customers : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("plist")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#listing-all-customers-plist","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("plist")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"booking-commands"}},[_v("Booking Commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#booking-commands","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("A customer can have "),_c('strong',[_v("zero, one or more")]),_v(" bookings.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-a-booking-badd"}},[_v("Adding a booking: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("badd")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-booking-badd","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("badd d/DATE_TIME p/PHONE x/PAX [r/REMARK]")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("badd d/2025-04-03 2:30 PM p/98765432 x/5 r/Birthday Celebration")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("badd d/2025-06-10 7:00 PM p/91234567 x/2")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"editing-a-booking-bedit"}},[_v("Editing a booking: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bedit")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-a-booking-bedit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Edits the details of the booking identified by the booking ID."),_c('br'),_v("\nExisting values will be overwritten by the input values.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format:"),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bedit b/BOOKING_ID [d/DATETIME] [x/PAX] [r/REMARK]")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bedit b/1 d/2025-04-01 9:00 PM x/4 r/Anniversary")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bedit b/3 r/Changed to private room")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bedit b/2 d/2025-05-12 12:00 PM")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-a-booking-bdelete"}},[_v("Deleting a booking : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bdelete")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-booking-bdelete","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bdelete INDEX")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Deletes the booking with the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(".")]),_v(" "),_c('li',[_v("The index refers to the unique booking ID of the booking.")]),_v(" "),_c('li',[_v("The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, …​")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bdelete 2")]),_v(" deletes the booking with ID 2.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"marking-a-booking-status-mark"}},[_v("Marking a booking status: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mark")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#marking-a-booking-status-mark","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format:"),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mark b/BOOKING_ID s/STATUS")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("BOOKING_ID")]),_v(" is shown when you list bookings.")]),_v(" "),_c('li',[_v("Status must be exactly one of: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UPCOMING")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("COMPLETED")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CANCELLED")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mark b/2 s/COMPLETED")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"filtering-bookings-filter"}},[_v("Filtering bookings: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#filtering-bookings-filter","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format:"),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter [p/PHONE_NUMBER] [d/DATE] [s/STATUS]")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter p/98765432")]),_v(" - Shows all bookings made by the customer with phone number 98765432")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter d/2023-12-25")]),_v(" - Shows all bookings on 25 December 2023")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter s/COMPLETED")]),_v(" - Shows all bookings marked as completed")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter p/98765432 d/2023-12-25")]),_v(" - Shows all bookings made by the customer with phone 98765432 on 25 December 2023")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter p/98765432 s/UPCOMING")]),_v(" - Shows all upcoming bookings for the customer with phone 98765432")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"listing-bookings-blist"}},[_v("Listing bookings: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("blist")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#listing-bookings-blist","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("blist")]),_v(" : Lists upcoming bookings.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("blist /all")]),_v(" : Lists "),_c('strong',[_v("all")]),_v(" bookings (including completed/cancelled).")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("blist")]),_v(" → Lists only upcoming bookings.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("blist /all")]),_v(" → Lists all bookings.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"clearing-completed-and-cancelled-bookings-clearbookings"}},[_v("Clearing completed and cancelled bookings: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clearbookings")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#clearing-completed-and-cancelled-bookings-clearbookings","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Clears all bookings marked as "),_c('strong',[_v("Completed")]),_v(" or "),_c('strong',[_v("Cancelled")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format:"),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clearbookings")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clearbookings")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"summarising-bookings-of-the-day-today"}},[_v("Summarising bookings of the day: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("today")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#summarising-bookings-of-the-day-today","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("today")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Displays all bookings for the current date.")]),_v(" "),_c('li',[_v("Also shows a summary count of upcoming, completed and cancelled bookings for today.")]),_v(" "),_c('li',[_v("Shows the list of customers who have bookings today.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("today")]),_v(" → Lists all of today's bookings and customers who made those bookings.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"general-commands"}},[_v("General Commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#general-commands","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"clearing-all-entries-clearall"}},[_v("Clearing all entries : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clearall")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#clearing-all-entries-clearall","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clearall")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"viewing-help-help"}},[_v("Viewing help : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#viewing-help-help","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/helpMessage.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/helpMessage.png","alt":"help message"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"exiting-the-program-exit"}},[_v("Exiting the program : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exiting-the-program-exit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"saving-the-data"}},[_v("Saving the data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#saving-the-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"editing-the-data-file"}},[_v("Editing the data file"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-the-data-file","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("KrustyKrab data are saved automatically as a JSON file "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[JAR file location]/data/addressbook.json")]),_v(". Advanced users are welcome to update data directly by editing that data file.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"archiving-data-files-coming-in-v2-0"}},[_v("Archiving data files "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[coming in v2.0]")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#archiving-data-files-coming-in-v2-0","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('em',[_v("Details coming soon ...")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"faq"}},[_v("FAQ"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#faq","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": How do I transfer my data to another Computer?"),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": Install the app in the other computer and overwrite the empty data file it creates with the file that contains the data of your previous KrustyKrab home folder.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"known-issues"}},[_v("Known issues"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#known-issues","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_v("When using multiple screens")]),_v(", if you move the application to a secondary screen, and later switch to using only the primary screen, the GUI will open off-screen. The remedy is to delete the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferences.json")]),_v(" file created by the application before running the application again.")]),_v(" "),_c('li',[_c('strong',[_v("If you minimize the Help Window")]),_v(" and then run the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" command (or use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Help")]),_v(" menu, or the keyboard shortcut "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("F1")]),_v(") again, the original Help Window will remain minimized, and no new Help Window will appear. The remedy is to manually restore the minimized Help Window.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"command-summary"}},[_v("Command summary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-summary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Action")]),_v(" "),_c('th',[_v("Format, Examples")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("Add Customer")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("padd n/NAME p/PHONE_NUMBER e/EMAIL a/ADDRESS [m/IS_MEMBER] [t/TAG]…​")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("padd n/James Ho p/22224444 e/jamesho@example.com a/123, Clementi Rd, 1234665 t/friend")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Add Booking")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("badd d/DATE_TIME p/PHONE x/PAX [r/REMARK]")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("badd d/2025-04-03 2:30 PM p/98765432 x/5 r/Birthday Celebration")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("List Customers")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("plist")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("List Bookings")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("blist")]),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("blist /all")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Edit Customer")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pedit INDEX [n/NAME] [e/EMAIL] [a/ADDRESS] [m/IS_MEMBER] [t/TAG]…​")]),_v(" "),_c('br'),_v(" e.g.,"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pedit 3 a/123 Sunset Way m/true t/friend t/vip")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Edit Booking")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bedit b/BOOKING_ID [d/DATETIME] [x/PAX] [r/REMARK]")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bedit b/1 d/2025-04-01 9:00 PM x/4 r/Anniversary")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Delete Customer")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pdelete INDEX")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pdelete 3")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Delete Booking")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bdelete INDEX")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bdelete 2")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Find Customers")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find KEYWORD [MORE_KEYWORDS]")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find James Jake")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Filter Bookings")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter [p/PHONE_NUMBER] [d/DATE] [s/STATUS]")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter p/98765432")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter d/2023-12-25")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter s/COMPLETED")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Mark Booking")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mark b/BOOKING_ID s/STATUS")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mark b/2 s/COMPLETED")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Today's Bookings")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("today")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Clear All")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clearall")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Clear Bookings")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clearbookings")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Help")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Exit")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")])])])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.6.0")]),_v(", generated on Thu, 3 Apr 2025, 20:06:52 GMT+8]")])])])}
}];
  