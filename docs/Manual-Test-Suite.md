This is a list of things to try when testing a new OpenCollar release.  It's a work in progress.  Please add more!

If you're running tests and find an issue, please report it at https://github.com/OpenCollarTeam/OpenCollar/issues.

# Update

- Try updating an older collar (3.X-6.5) using a regular updater.  You should see no error messages.  The version number in dialogs should be updated.
- Try updating a 6.6/6.7 collar using the seed script and a regular updater. 
- Try updating a V7.X collar to V8.X using a regular updater.
- Set an owner.  Update the collar.  Check that the owner is still set.
- Try deleting the "nadu" animation from your collar, and then renaming "tower" to "nadu".  Then do an update.  Both "tower" and "nadu" should be replaced.
- Put a no-copy "nadu" animation into collar contents, then do an update.  It should be left in place (we never delete/replace no-copy anims).
- Check the "Experience" attached to the scripts in the updater.  It should be the "OpenCollar" experience owned by "nirea" for all scripts.  (We're not using any experience-specific features in the collar yet, but are using it so users who want to verify that they have an unmodified official version can do so.)

# Interface

- Touching the collar should bring up the main menu.
- Using the "menu" command should bring up the main menu.
- The main menu should have a link to the OC group and/or documentation.
- Clicking the LOCK button should lock the collar and change the button to UNLOCK.  Click again to unlock.
- In submenus, the BACK button should take you up a level.
- Try using the "prefix" command to change prefix.
- Try using the "channel" command to change the private channel for commands.
- Try using the "*" prefix to run a command on several people at once.
- Try using the "#" prefix to run a command on everyone but the wearer.

# Access

- Try adding an owner.
- Try running away.
- Try adding an owner, then another.  The second should fail.
- Try adding the wearer as an owner, then adding an owner, then adding another.  Both additions should succeed.
- Try adding an owner, then having that owner add another.  The second should succeed.
- Try adding an owner, and then having that owner try to remove or block the wearer. The wearer should get a prompt to allow this.
- Try adding and removing people from the Trust and Block lists.
- Try enabling Group access.  People in the same active group as the collar should be able to give commands (try "nadu" for example).
- Try using the "safeword" command to tell you your current safeword.
- Try using the "safeword BLUE" command to change your safeword to BLUE.
- Try using your safeword when leashed, RLV restricted, and posed.  You should be unleashed, unrestricted, and unposed.  Your owner should get a message.

# Capture
- Try enabling "Capture" mode.  Leave the Risky box unchecked.  When someone touches your collar, you should see a dialog asking whether to grant them access.
- Try enabling "Capture" mode.  Also check the Risky box.  When someone touches your collar, they should immediately get access.
- Try using Capture while the collar is set to Public access. Capture should fail.

# Leash
- Test saying "leashmenu" to bring up the leash menu.
- Test the "grab", "leash", and "toggleleash" commands for leashing the wearer.
- Test the "unleash", "unfollow", and "toggleleash" commands for unleashing the wearer.
- Test the "pass" command for passing the leash to someone else.
- Test the "length" command for changing the leash length.
- Test the "anchor" command for leashing to an object.
- Leash to an object, and then relog. Wearer should be re-leashed when they log back in.
- Test walking away while leashed.  You should get pulled back.
- Test changing the leash particles using the Leash -> Configure menu.
- With RLV enabled, test setting Strict mode in Leash -> Configure.  You should be unable to TP while leashed in Strict mode.
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
- Try the Print button.  You should see your collar settings dumped to chat.
- Paste your printed settings into a .settings notecard in the Settings prim of the collar.  Modify a value.  Try the Settings -> Load button in the collar.  Your modified value should now be loaded.
- Try modifying the Position, Rotation, and Size of the collar from the Settings menu.
- Try enabling the Stealth mode to make your collar invisible.
- Try switching between appearances using the Themes button.

# Animations
- Turn on AnimLock.  Only owners should be able to start/stop anims.  Turn it off.  Non-owner wearer should be able to stop/start anims.
- Turn on AntiSlide.  See if it works?  Not sure what it's supposed to do.
- Try starting/stopping a pose.
- Try adjusting pose height with the arrow buttons.
- Try kissing someone with the kiss couple's animation.

# Help
- Help menu should show prefix, channel, safeword, and documentation link.
- Help/About -> Help should give you a .help notecard.
- Help/About -> Contact should give links to Github and inworld group.

# Apps - Bookmark
- Try putting the oc_bookmarks from the "spares" folder in your collar.  Then use the "rm bookmarks" command.  You should get a prompt, and then after clicking Yes the script should be removed from your collar.

# Apps - LABEL
SETUP: collar with prims named "Label\~00" to "Label\~11" (or more)
TESTS:
- click Collar -> Menu -> Apps -> Label
- click Set Label, enter "Owner's Name", Submit
- click Show (then repeat to hide, then repeat to show again)
- click Color, Red (then repeat for Green, Blue ... Black, White
- click Font, LCD (then repeat for Andale 1, Andale 2, Serif 1, Serif 2)
- click Scroll (then repeat to stop scrolling)
- click Back (to go back to Apps dialog)

# Apps - BELL
SETUP: collar with prims named "Bell" (usually sphere and ring)
TESTS:
- click Collar -> Menu -> Apps -> Bell
- click On (see info and try walk), then repeat click Off
- click Show (then repeat to hide, then repeat to show again)
- click Next Sound (Active Sound changes), then repeat 8 times
- click Vol+ (Bell Volume changes), then repeat 10 times
- click Vol- (Bell Volume changes), then repeat 10 times
- click Back (to go back to Apps dialog)

# Apps - TITLER
SETUP: collar with prim named "FloatText"
TESTS:
- click Collar -> Menu -> Apps -> Title
- click Set Title, enter "My Title", Submit
- click Show (then repeat to hide, then repeat to show again)
- click Up, then repeat
- click Down, then repeat
- click Back (to go back to Apps dialog)

# Apps- MESH LABEL
SETUP: collar with prims named "MeshLabel\~00" & "MeshLabel\~00"
TESTS:
- click Collar -> Menu -> Apps -> Label
- click Set Label, enter "Owner's Name", Submit
- click Show (then repeat to hide, then repeat to show again)
- click Color, Red (then repeat for Green, Blue ... Black, White
- click Font, Outlined (then repeat for Solid)
- click Scroll (then repeat to stop scrolling)
- click Back (to go back to Apps dialog)
