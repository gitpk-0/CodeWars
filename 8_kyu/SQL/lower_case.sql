select id, name, birthday, lower(race) as race
from demographics;

-- or

select *, lower(race) as race from demographics;