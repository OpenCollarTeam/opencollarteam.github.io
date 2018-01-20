## Owners
Owners have the highest rank of access on the collar.  The collar access, exceptions, lock, leash and some RLV functions are sensitive to rank.  Once an owner is set, unless OwnSelf is checked, the wearer can no longer use the access menu or add exceptions or unlock the collar.  Also the wearer cannot unleash from an owner without safewording.

### OwnSelf
When checked this retains the wearer on the owner list even after an owner is set.  Any other owner can uncheck it, removing the wearer from the owner list.

>[prefix] OwnSelf on

>[prefix] OwnSelf off

### +/- Owner
Adds and removes Owners.  Only owners can add and remove owners, and wearer if OwnSelf is checked.  Limit three owners.

   >[prefix] add owner [user name or UUID] 

   >[prefix] rm owner [user name or UUID]
   
## Trusted
Trusted gives named individuals the same level of access as Public and Group.  Trusted cannot change the Access menu but do outrank the wearer on the leash. This is the function formerly known as "secondary owner" or "secowner". 

>[prefix] add trust [name or UUID]

>[prefix] rm trust [name or UUID]

## Public
Checking Public gives anyone limited access to your collar, including the leash, animations, bookmarks and force sit.

## Group  
To set Group, first activate the desired group, then check Group in the Access menu.  Group members with the group active will then have public / trusted level access.  NOTE the collar restricts activating a different group if the wearer has group access checked.  To change groups, first uncheck group access. Then activate a different group.

## Block    
This allows the collar only to block named avatars from using the collar.  Use sparingly since this also adds to the memory consumption of the script.  

>Add to the Blocklist: [prefix] add block [name or UUID]  
>Remove from the Blocklist: [prefix] rm block [name or UUID]
