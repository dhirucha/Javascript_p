function calculateDaysFromDate(targetDate) {
    // Convert target date string to Date object
    const target = new Date(targetDate);
    
    // Get current date
    const today = new Date();
    
    // Calculate the difference in milliseconds
    const differenceMs = today - target;
    
    // Convert milliseconds to days
    const daysDifference = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    return daysDifference;
}

// Example usage:
const targetDate = "2023-12-19"; // Change this to your desired target date
const daysDifference = calculateDaysFromDate(targetDate);
console.log("Number of days from", targetDate, "to today:", daysDifference);
