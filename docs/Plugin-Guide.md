---
layout: home
title: OpenCollar Plugin Guide
---

This document is a guide to  the creation, distribution and sale of third party plugins and addons for OpenCollar products.  

## Permissions and Licences

When creating a plugin or addon for OpenCollar, you are free to set the permissions on your own work as you choose.

However, any script derived from the OpenCollar open source scripts, in whole or in part, and therefore subject to their public 
license must retain the same permissions as the scripts you received: namely full permissions to copy modify and transfer; with 
the exception of the plugin template itself or similar listener code whose sole purpose is to link your plugin to the OpenCollar
object.

Any resource licensed under the Creative Commons Attribution-ShareAlike 4.0 International Public License 
[https://creativecommons.org/licenses/by-sa/4.0/legalcode](https://creativecommons.org/licenses/by-sa/4.0/legalcode) must retain the permssions you received.  Resources include models, 
animations, sounds, textures, images and particle effects.

It is advisable to make available separate versions set to copy-modify and modify-transfer respectively, so that users can choose the version that corresponds to the permissions on their collar object and do not end up with an object that is neither copy nor transfer.
 Any OpenCollar resource or script you distribute along with your plugin must include a copy of the respective OpenCollar license.  The OpenCollar GPL maybe be found here:  https://github.com/OpenCollarTeam/OpenCollar/blob/master/LICENSE.

## BRANDING

Users should be able to clearly see which scripts are yours and which scripts are from the OpenCollar project.  
To prevent confusion, do not use the "oc_" prefix or the word "OpenCollar" in your script name. 
Use your own prefix and/or brand name instead. 

## TECHNICAL:

### Auth
- meaning of num, string, and key fields in auth linkmessages  
- auth levels  

### Settings
- storing  
- retrieving  

### Menus, Dialogs, and Notifications
- Adding a button to the Apps menu  
- Handling a "Back" button (triggering parent menu)  
- Sending a dialog  
- Handling a dialog response  

### Animations
- all animations automatically moved into Animator prim  
- starting/stopping animation  

### RLV
- You can send your own @commands, but if you use our system instead you don't have to roll your own detection 
of whether the viewer has RLV enabled or not.
