## Owners
Owners have the highest rank of access on the collar.  The collar access, exceptions, lock, leash and some RLV functions are sensitive to rank.  Once an owner is set, unless OwnSelf is checked, the wearer can no longer use the access menu or add exceptions or unlock the collar.  Also the wearer cannot unleash from an owner without safewording.

### OwnSelf
When checked this retains the wearer on the owner list even after an owner is set.  Any other owner can uncheck it, removing the wearer from the owner list.

>[prefix] OwnSelf on  
[prefix] OwnSelf off

### +/- Owner
Adds and removes Owners.  Only owners can add and remove owners, and wearer if OwnSelf is checked.  Limit three owners.  The UUID is the "key"--string of characters at the top of the inworld user profile.  Enter the UUID to add or remove an owner remotely.

>[prefix] add owner [user name or UUID] 
[prefix] rm owner [user name or UUID]
   
## Trusted
Trusted gives named individuals the same level of access as Public and Group.  Trusted cannot change the Access menu but do outrank the wearer on the leash. This is the function formerly known as "secondary owner" or "secowner". 

>[prefix] add trust [name or UUID]  
[prefix] rm trust [name or UUID]

## Public
Checking Public gives anyone limited access to your collar, including the leash, animations, bookmarks and force sit.  
> [prefix] public on  
[prefix] public off

## Group  
To set Group, first activate the desired group, then check Group in the Access menu.  Group members with the group active will then have public / trusted level access.  NOTE the collar restricts activating a different group if the wearer has group access checked.  To change groups, first uncheck group access. Then activate a different group.  
> [prefix] group on  
[prefix] group off

## Capture
*On / Off* When set on, allows anyone to Capture the wearer by taking their leash and gives them an access level similar to Trusted.  "Risky" toggles wearer permission. Capture On/Off cannot be overridden by the wearer when set by an owner.

In addition to Trusted access, the Capture function applies the Refusetp exception.  The wearer's viewer automatically accepts tp offers when he or she is leashed by the Capturer.

> [prefix] capture on  
[prefix] capture off  
[prefix] capture info off -- turns off the recurring chat

## Access List 
Sends a readout of the list of owners and other access settings to chat.  Available to owner and wearer only.  
> [prefix] list  


## Block    
This allows the collar only to block named avatars from using the collar.  Use sparingly since this also adds to the memory consumption of the script.  

>Add to the Blocklist: [prefix] add block [name or UUID]  
>Remove from the Blocklist: [prefix] rm block [name or UUID]
