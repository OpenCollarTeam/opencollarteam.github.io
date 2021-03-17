Access is the OpenCollar ownership tool. **Associated Script:** [oc_api](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_api.lsl)   
There is a cap of 28 avatars across all named Access levels: Owner, Trusted, Blocked, and Temp Owner.

# Owner
Owners have the highest rank of access on the collar.  The collar access, exceptions, lock, leash and some RLV functions are sensitive to rank.  Once an owner is set, unless OwnSelf is checked, the wearer can no longer use the access menu or add exceptions or unlock the collar.  Also the wearer cannot unleash from an owner without safewording.    

## +/- Owner
Adds and removes Owners.  Only owners can add and remove owners, and wearer if OwnSelf is checked.  Limit three owners.  The UUID is the "key"--string of characters at the top of the inworld user profile.  Enter the UUID to add or remove an owner remotely.

>`[prefix] add owner [user name or UUID]`  
>`[prefix] rm owner [user name or UUID]`  
>`auth=owner~[UUID,UUID]` for one or more owners up to 255 characters.  If the line reaches more than 255 characters, start a new line:  
>`auth+owner~[UUID,UUID]` for additional owners.

- **To add the owner to wearer, go to + Owner and press >WEARER<**
- (V 7.3 and previous, check OWNSELF to add the wearer to owner)

# Trusted
Trusted gives named individuals the same level of access as Public and Group.  Trusted cannot change the Access menu but do outrank the wearer on the leash. This is the function formerly known as "secondary owner" or "secowner".

>`[prefix] add trust [name or UUID]`  
>`[prefix] rm trust [name or UUID]`  
>`auth=trust~[UUID]`  

# Public
Checking Public gives anyone limited access to your collar, including the leash, animations, bookmarks and force sit.  
>`[prefix] public on`  
>`[prefix] public off`  
>`[prefix] limit range on/off` : limits range for public access.  
`auth=public~1/0`

# Group  
To set Group, first activate the desired group, then check Group in the Access menu.  Group members with the group active will then have public / trusted level access.  NOTE the collar restricts activating a different group if the wearer has group access checked.  To change groups, first uncheck group access. Then activate a different group.  
> `[prefix] group on`  
>`[prefix] group off`  
>`auth=group~[groupuuid]~groupname~[groupname]`

# Runaway
When you press Runaway menu opens with three options:  
- **Yes** will execute a factory reset and completely clear the Access list.
- **No** will close the menu
- **Disable** will block the wearer's ability to run away on this collar.  This action can be initiated by the wearer by cannot be reversed by the wearer.  Only an owner can reverse it.  If the owner presses Disable in the Runaway menu, the wearer gets a dialog box to accept or decline.  
(**note** in 8.0.2 `auth=runawaydisable~1/0`, 1 means runaway is *not* disabled and 0 means runaway *is* disabled, in settings.)  
>`auth=runaway~1/0` 

# Access List
Sends a readout of the list of owners and other access settings to chat.  Available to owner and wearer only.  
> `[prefix] list`  


# Block    
This allows the collar only to block named avatars from using the collar.  Use sparingly since this also adds to the memory consumption of the script.  

>Add to the Blocklist: `[prefix] add block [name or UUID]`  
>Remove from the Blocklist: `[prefix] rm block [name or UUID]`
>Add to Settings: `auth=block~<UUID>`

# Runaway  
This command wipes the owner list and returns all collar settings to default.   
>`auth=norun~1` to disable runaway in Settings.
