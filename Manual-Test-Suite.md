This is a list of things to try when testing a new OpenCollar release.  It's a work in progress.  Please add more!

If you're running tests and find an issue, please report it at https://github.com/OpenCollarTeam/OpenCollar/issues.

# Update

- Set an owner.  Update the collar.  Check that the owner is still set.
- Try updating a 6.0-6.5.5 collar using a regular updater.  You should see no error messages.  The version number in dialogs should be updated.
- Try updating a 6.6/6.7 collar using the seed script and a regular updater.
- Try removing animations from your collar's Animator prim, then doing an update.  The animations should be replaced.
- Try having both a .couples card and a !couples card in the animator prim.  Customizations to the .couples card should be overwritten by an update, but customizations to !couples should not.
- Try deleting the "nadu" animation from your collar, and then renaming "tower" to "nadu".  Then do an update.  Both "tower" and "nadu" should be replaced.
- Put a no-copy "nadu" animation into the animator prim, then do an update.  It should be left in place (we never delete/replace no-copy anims).
- Check the "Experience" attached to the scripts in the updater.  It should be the "OpenCollar" experience owned by "nirea" for all scripts.  (We're not using any experience-specific features in the collar yet, but are using it so users who want to verify that they have an unmodified official version can do so.)

# Menu

- Touching the collar should bring up the main menu.
- Using the "menu" command should bring up the main menu.
- The main menu should have a link to the OC group and/or documentation.
- Clicking the LOCK button should lock the collar and change the button to UNLOCK.  Click again to unlock.
- In submenus, the BACK button should take you up a level.

# Access

- Try adding an owner.
- Try running away.
- Try adding an owner, then another.  The second should fail.
- Try setting OwnSelf, then adding an owner, then adding another.  Both additions should succeed.
- Try adding an owner, then having that owner add another.  The second should succeed.
- Try adding and removing people from the Trust and Block lists.
- Try enabling Group access.  People in the same active group as the collar should be able to give commands (try "nadu" for example).

# Capture
# Leash
- Test saying "leashmenu" to bring up the leash menu.
- Test the "grab", "leash", and "toggleleash" commands for leashing the wearer.
- Test the "unleash", "unfollow", and "toggleleash" commands for unleashing the wearer.
- Test the "pass" command for passing the leash to someone else.
- Test the "length" command for changing the leash length.
- Test the "anchor" command for leashing to an object.
- Test walking away while leashed.  You should get pulled back.
- Test changing the leash particles using the Leash -> Configure menu.
- With RLV enabled, test setting Strict mode in Leash -> Configure.  You should be enable to TP while leashed in Strict mode.
- Test enabling Leash -> Configure -> Turn.  You should be turned toward the leasher when pulled by the leash with this mode enabled.  (Requires RLV enabled?)

# RLV
- Log in with RLV enabled in your viewer.  Wear the collar.  RLV should automatically be enabled in the collar.
- Log in with RLV disabled in your viewer.  Wear the collar.  RLV should automatically be disabled in the collar.
- Try testing all the features in the Restrictions menu.
- Try turning off IMs in the Restrictions menu, then setting RLV to OFF in the collar.  IMs should be enabled again.
- Try tuning off IMs in the Restrictions menu, then doing CLEAR ALL.  IMs should be enabled again.
- Try Force Sit.
- Try navigating through your #RLV inventory folder using the # Folders menu.  Try attaching/detaching an item.  Try locking an item on, and locking it off.
- Try wearing an outfit in the .outfits folder.
- Try using the "wear" command to wear an outfit in the #RLV folder.
- Try using the "+" command to switch your av to wearing the contents of an #RLV folder.
- Try using the "&" command to add (not replace) the contents of an #RLV folder to what you're wearing.


# Settings
# Animations
- Turn on AnimLock.  Only owners should be able to start/stop anims.  Turn it off.  Non-owner wearer should be able to stop/start anims.
- Turn on AntiSlide.  See if it works?  Not sure what it's supposed to do.
- Try starting/stopping a pose.
- Try adjusting pose height with the arrow buttons.

# Help
- Help menu should show prefix, channel, safeword, and documentation link.
- Help/About -> Help should give you a .help notecard.
- Help/About -> Contact should give links to Github and inworld group.

# Apps
- Try putting the oc_bookmarks from the "spares" folder in your collar.  Then use the "rm bookmarks" command.  You should get a prompt, and then after clicking Yes the script should be removed from your collar.
