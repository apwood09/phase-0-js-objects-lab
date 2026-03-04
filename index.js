const attendee = {
  attendeeId: 'T001', 
  name: 'Alice Smith', 
  event: 'JavaScript Conference', 
  ticketType: 'VIP', 
  ticketPrice: 150.00, 
}; 

// function to log attendee name 
function logAttendeeName(attendee) {
  console.log(attendee.name); 
}

// function to log ticket price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice)
}

// function to update ticket type
function updateTicketType(attendee, newType) { 
    attendee.ticketType = newType; 
}
updateTicketType(attendee, 'VIP');
console.log(attendee.ticketType); 

// function update tiket price
function updateTicketPrice(attendee, newPrice) { 
  attendee.ticketPrice = newPrice; 
}
expect(attendee).toHaveProperty("ticketPrice", 150);

// function remove event property
function removeEventProperty(attendee) {
  delete attendee.event;
} 
console.log(attendee); 

// add checked in proprty
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true; 
}
addCheckedInProperty(attendee);
console.log(attendee); 

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};