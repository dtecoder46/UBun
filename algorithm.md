# Algorithm

## Calorie Tracker Algorithm

### How much you gained via eating
1. Select food type
2. Add the associated calories from a JS dictionary

### How much you lost via sitting, walking, exercise
1. Select activity type
2. Enter duration in minutes
3. Subtract calories burned
    1. Get a calories burned/minutes ratio from a dictionary
    2. Multiply the ratio by the duration

### Net gain/loss table
1. Update net gain/loss after each entry with calendar date
2. store in local storage and show updates in table
    1. Run on page load
        1. If 11:59 PM
            1. Retrieve from local storage
            2. Save to database w/ calendar date
            3. Clear local storage
            4. Create new table entry with next date
        2. Else, only retrieve from local storage

## Core UBun Algorithm
1. Define multiple utility classes in a JS string
2. Put the string in the HTML tag “class” attribute