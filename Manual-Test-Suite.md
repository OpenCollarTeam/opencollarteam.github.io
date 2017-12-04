This is a list of things to try when testing a new OpenCollar release.  It's a work in progress.  Please add more!

If you're running tests and find an issue, please report it at https://github.com/OpenCollarTeam/OpenCollar/issues.

# Menu

- Touching the collar should bring up the main menu.
- Using the "menu" command should bring up the main menu.
- The main menu should have a link to the OC group and/or documentation.
- Clicking the LOCK button should lock the collar and change the button to UNLOCK.  Click again to unlock.
- In submenus, the BACK button should take you up a level.

# Update

- Set an owner.  Update the collar.  Check that the owner is still set.
- Try updating a 6.0 to 6.5.5 collar using a regular updater.  You should see no error messages.  The version number in dialogs should be updated.
- Try updating a 6.6/6.7 collar using the seed script and a regular updater.
- Try removing animations from your collar's Animator prim, then doing an update.  The animations should be replaced.
- Try having both a .couples card and a !couples card in the animator prim.  Customizations to the .couples card should be overwritten by an update, but customizations to !couples should not.
- Try deleting the "nadu" animation from your collar, and then renaming "tower" to "nadu".  Then do an update.  Both "tower" and "nadu" should be replaced.
- Put a no-copy "nadu" animation into the animator prim, then do an update.  It should be left in place (we never delete/replace no-copy anims).
- Check the "Experience" attached to the scripts in the updater.  It should be "OpenCollar" for all of them.

# Capture
# Leash
# RLV
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

- Try putting oc_bookmarks in your collar.  Then use the "rm bookmarks" command.  You should get a prompt, and then after clicking Yes the script should be removed from your collar.
