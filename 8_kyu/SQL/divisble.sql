select
    case
        when yr % 100 = 0 then yr/100
        when yr % 100 > 0 then yr/100 + 1
    end
as century
from years;