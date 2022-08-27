---
layout: home
title: Quick User Guide
---


# Getting Started
Open the Collar Menu by touching your collar! Then try all those menu buttons and see what they do.  That's it ! 

Just kidding ! There's a lot more to say. Having trouble reaching your collar to touch it? Usually this is because there's something invisible in the way like hair.  No worries! You can use a chat command.  
- If you have not set an owner you are the default owner and can access all parts of the collar.  
- Most but not all collar functions are available as buttons in the collar menu so chat commands are optional. 

## Chat Commands
Chat Commands are typed into the local chat line. Many of the menus and submenus in OpenCollar can be called by using chat commands of the same name as the menu button.  Here is an example of a chat command by the collar wearer Joe Zipcode: `jo menu`.  This chat command calls the main menu. `jo` is Joe's prefix, the first two letters of h/er user name.

Local chat is on channel 0. If you don't want your command to be visible in local chat, call your menu by typing `/1 [prefix] menu`, or in Joe's case, `/1 jo menu`. This sends the command to channel 1 instead and you don't see it in local chat.

### Prefixes
Chat commands take the form `[prefix] [call] [value]`.  The space between prefix, command, and sometimes value is important. Most commands are just `[prefix] [call]` but some include a value if you want to do something like change your leash length, your listener channel, your prefix, etc. Then you need your prefix, the call AND the word or number you want to change to.   
- Prefixes direct collar commands only to wearers with those initials, for collars to which you have access.  So beware of possible duplicate prefixes! 
- Your prefix can be changed by the collar owner only.  Wearers who have set an owner cannot change the prefix unless they are also owners.   

[More About [Prefixes, Chat Commands and Other NonMenu Functions](/docs/Prefixes,-Chat-Commands-and-Other-Non-Menu-Functions)

## Settings
Your collar settings can be saved to a settings notecard.  See the [Settings](/docs/Settings) page for more about how to do this.  In the pages of the Complete Guide after the chat command for a menu function you may see a string that looks like this, with the values filled in:  `TOKEN=Attribute~Value`.  This is the settings string for the function you can save to a notecard. The easy way to learn settings is to set your collar as desired, then go to the Settings menu and press Print.  
- **Security Note:** Settings saved to a settings notecard will reload and reinstate the setting when the wearer relogs or when the Settings are loaded by the menu.  This means a settings notecard can reinstate things you thought you had removed, such as owners.  **DO NOT** accept a collar as a gift from any person or group you do not know and trust.  
- If you received your collar from anyone other than an official OpenCollar vendor, find the Settings prim.  If there is a .settings notecard in the Settings prim, open it and make sure it is blank.  A new collar from an OpenCollar vendor comes without a .settings notecard.
 
# Using Your Collar

When you open the main menu you will see buttons that go to all the different collar menus.  Each of these menus is documented in the complete User Guide.  For this Quick Start, you need to know enough to make a few basic choices about how you will use your collar.

## Capture  

If you want just an occasional adventure, Capture might be a good way to start using your collar. Turn Capture on in the App  Menu and nearby avatars can capture your collar.  See more in [Apps](/docs/Apps). 
- Only your Captor can end the Capture event by releasing you.  
- However, if you need to get away, you can always use the collar safeword (RED), see below!

## Access
You are wearing a collar because you want someone else at some time to be able to control your avatar.  The degree of control you give is up to you.  To give someone else access to your collar, open the collar menu and press access, or type [prefix] access.  

In the Access menu you can add Owners, Trusted, or set group or public access.  If you set an owner you lose your default owner access to your collar. It is best not to set an owner till you are sure you want to give that person full control over your collar. **If you want to retain owner level control on your collar, go to Access > + Owner and select WEARER before adding an owner.**  Your owner however can uncheck that if they choose to.  More about [Access](/docs/Access) here.

## Safeword

Your collar has a safeword chat command that is built into every menu in the collar.  Using the safeword will reset all collar restrictions, without changing the collar access.  The collar safeword also clears the relay.

The default collar safeword is RED, all caps.  You can also type it on channel 1 `/1 RED` or in ooc brackets which cannot be blocked by an RLV command `((RED))`.  See [NonMenu Functions](/docs/Prefixes,-Chat-Commands-and-Other-Non-Menu-Functions) for more.

## Runaway

If you find you must clear an owner, you can do that by pressing the Runaway button in the Access menu, or typing [prefix] runaway.  This will wipe the access list and reset all collar functions to default.  Make sure the .settings notecard is absent or blank (see Settings above).

# About RLV

RLV (Restrained Love Viewer) is a set of permissions coded into the viewer, that allows other avatars limited control over some viewer functions. There are several approved third party viewers that allow you to enable / disable RLV. Among the most popular for many users are Firestorm, Restrained Love Viewer, and Singularity. **Please note** turning on RLV alone is not enough to enforce any RLV restrictions in world. For that you need to wear or rez a scripted object you own to invoke those restrictions.  OpenCollar is one of many available RLV scripted objects.

OpenCollar uses RLV to enforce the Collar Lock in the Main Menu.  The rest of the RLV functions in the collar can be found in the RLV menu.  Push Clear All in the RLV menu to clear these restrictions (not available to wearers who are not self owned).  
- The collar Relay converts RLV commands from objects the wearer does not own. Relay permissions are not affected by the Access settings. See more in the Complete User Guide [RLV](/docs/RLV)and [Relay](/docs/Relay) pages.

Please remember that one of the most basic safety features about RLV is your ability to turn it off and on in the viewer. Any RLV restriction can be cleared by turning off RLV and relogging; or logging on in the official SL Viewer. Some groups claim to use "extreme RLV" that cannot be turned off.  This is not possible in any approved third party viewer.  Beware of downloading any viewer code that claims to alter this basic safety function.  
