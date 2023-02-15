select 
    concat('Hello, ', name, ' how are you doing today?') as greeting 
from person;

-- or

select 
    'Hello, ' || name || ' how are you doing today?' as greeting
from person;

-- or 

select
    format('Hello, %s how are you doing today?', name) as greeting
from person;