Steps

Extract the AM/PM part

Take the last 2 characters of the string (s[-2..]).

Store this in period.

Extract the hour

Take the first 2 characters of the string (s[0..2]).

Convert to an integer, store in hours.

Extract the remaining part

Take characters from index 2 to 8 (:mm:ss).

Store in rest.

Adjust hours based on period

If period == "AM":

If hours == 12, set hours = 0.

Else (period == "PM"):

If hours != 12, add 12 to hours.

Format hours

If hours < 10, add a leading zero (e.g., 0 → "00").

Else, convert normally to a string.

Return result

Concatenate hoursStr + rest.