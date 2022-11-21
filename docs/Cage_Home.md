 # Purpose 
 The purpose of the plugin is to give the dom all the benefits of keeping a sub in
 a cage for long terms without causing the sub extreme boredom and frustration, as
 often occurs if the dom is away from SL for a couple of days.
 
 # Description
 When the owner of the sub logs on, or the sub logs on and the owner is already on,
 the sub is teleported to an owner set location called the Cage Home, and kept there
 until:
   - The owner comes near
   - The owner TPs the sub
   - A timer expires
   - Any primary owner manually releases the sub
   
 # Quick Installation
   1. Put the script in the unlocked OC collar.
   2. Re-attach collar or relog
   3. The sub must stand where the "Cage Home" should be
   4. The owner selects "Cage Here" from the menu or chat command
   5. The owner now arms the plugin. This owner becomes cage owner.
   
- If the owner arms Cage Home while both they and the wearer are away from the "cage", the wearer is NOT put on a countdown, even after the owner logs off. 
- If the wearer runs away, they gain access to the Disarm button. If they do not disarm the App, they will still be summoned when the former owner logs in.
   
 # Settings
 Below is a complete list of available commands. Chat commands are only available to primary owners.
- `[prefix] ch here` Makes sub's current position the Cage Home Location.  Valid when not caged.
- `[prefix] ch arm`  Arms the Cage Home plugin. The primary that issues this command will become
   Cage Owner, to distinguish them from other primary owners. The on/offline state
   of the Cage Owner will be monitored.  Valid when a Home Location has been set and not already armed.
- `[prefix] ch disarm`  Disarms the Cage Home plugin. Any primary owner may disarm.
   Valid when armed, but not caged.
- `[prefix] ch release`
   Release the sub from the Cage Home. Any primary owner may release. If the
   primary owner that releases the sub is not the Cage Owner, the Cage Owner will
   also be notified about this release.   
- [prefix] ch settings
   Shows current settings. There is also a menu button for this action.
- `[prefix] ch commands` Shows available chat commands. This list is unprefixed. There is also a menu
   button for this action.
- `[prefix] ch warntime [seconds]` Specifies the duration, in seconds, between a warning is issued and the actual
   capturing (teleport). If this value is 0 or lower, no warning will be issued.
- `[prefix] ch radius [meters]` Specifies the radius of the Cage Home, in meters.
- `[prefix] ch cagetime <minutes>` Specifies the duration of the timer, after which the sub will be auto released,
   if not released manually earlier. If this value is 0 or less, no timer will be
   activated (use with care!).  
- `[prefix] ch notifychannel [channel number]` Specifies the channel number on which capturing (arrival) and releasing must
   be announced. If this value is 0 (public chat), no announcements will be made.
   
- `[prefix] ch notifyarrive [arrive string]` Specifies the word or phrase that will be said upon capture (teleport
   arrival) of the sub.
- `[prefix] ch notifyrelease [release string]` Specifies the word or phrase that will be said upon release of the sub.
   
- `[prefix] ch warnmessage [warning message]` Specifies the word or phrase that will be said in public chat, that will
   announce the sub being summoned. The following tokens may be used:  
   - `@`  will be replaced with the sub's username
   -  `#`  will be replaced with the number of seconds

