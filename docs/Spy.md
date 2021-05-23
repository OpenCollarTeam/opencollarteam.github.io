---
layout: home
title: Spy
---

Spy is an optional app that can be added to the collar or updater.  You can obtain a copy of the Spy application at [OpenCollar Headquarters](http://maps.secondlife.com/secondlife/KBar%20West/10/82/1201) at K-Bar West.  You can compile it directly from the OpenCollar repository here:   

What is Spy?
Spy is an Open Collar-compatible application that allows a collar owner to monitor certain elements of the collar wearer's activities, even if the wearer is elsewhere on the grid. These activities include: teleport destinations,  local chat, and the names of nearby avatars. Reports are sent to the collar owner at regular intervals, the frequency of which can be set in the application menu. Spy can only be activated with the wearer's consent.

Installing Spy on your Open Collar
As always, it is recommended to make a back-up copy of your collar before attempting to install new features. When you activate your Open Collar group tag and click the Spy app sign at the location linked above, you will receive a notecard with some brief instructions and the spy app script itself, which is called oc_spy . Click that script and select "copy to inventory". It should go to the "scripts" folder. Once that's done, right-click your collar and select edit. You can do this while the collar is being worn. Go to the contents tab in the edit window, find the oc_spy script in your inventory, and drop in into the "contents" tab. Close the edit window. Your collar will then restart. Once the restart is complete, open your collar menu and click the Apps button. You should now see Spy as one of the available apps. If it is not there, go to Settings and press Fix. Once Spy is visible in the menu, it's time to configure it.



Configuring Spy
The first step in configuring Spy is to assign a collar owner...who's not the wearer. Almost nothing in the Spy app settings is configurable by the wearer, even if they are also listed an owner on the collar. Similarly, someone with Trusted access also cannot access the Spy app settings; they are reserved for non-wearer owners. When such an owner clicks the Spy button in the menu, they are presented with the following settings:

- Rate... : This adjusts the time interval (in seconds) that the sensor looks for the wearer and makes a report back to the owner.
- Range... : This adjusts the distance around the wearer that the Spy app searches for nearby avatars. Maximum range is 20.

The remaining four buttons in the Spy menu are on / off checkboxes, again, only selectable by the non-wearer owner. These are:

- Trace: Sets the Spy app to track the location and teleport activity of the wearer, and reports this back to the owner. If the owner is offline, they receive an activity report when they log in.
- Radar: Sets the Spy app to report to the owner any avatars standing near the wearer. The distance it checks is configured in the "Range" menu.
- SubChat: Sets the Spy app to record and report to the owner anything the wearer ( and ONLY the wearer) says in local chat.
- AttChat: Sets the Spy app to record and report to the owner anything the wearer's attachments say in local chat. 

Note that whenever the owner activates any of the Spy app functions, the wearer receives a message in local chat: " Spy App is active! " . This message is also posted when the wearer logs in while wearing a collar with Spy activated. There is no message in local when the owner de-activates any Spy app functions.  


Using Spy

The uses of Spy are really only limited by your imagination: Want to make sure that sub you sent on an errand did not stray nor dawdle? Curious who the wearer is hanging around with when you're not with them? Want to make sure they're not using any "bad words" when you're not there to watch them? Or maybe you just want to know where they are, and provide a constant reminder hat no matter where they go, they're never fully out of your sight.

Removing Spy

The Spy app functions can only be turned off by the collar owner (NOT the wearer-owner).
To remove Spy from the collar, unlock the collar, right-click the collar, and select "edit". Find the contents tab, and then scroll down to find the oc_spy script. Right-click the script and delete it. The collar will re-boot after a few moments; when the reboot is complete the wearer needs to relog to clear Spy from the Apps menu.

