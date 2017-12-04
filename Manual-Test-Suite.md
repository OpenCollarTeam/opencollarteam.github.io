This is a list of things to try when testing a new OpenCollar release.

# Menu
# Update

- Try updating a 6.0 to 6.5.5 collar using a regular updater.
- Try updating a 6.6/6.7 collar using the seed script and a regular updater.
- Try removing animations from your collar's Animator prim, then doing an update.  The animations should be replaced.
- Try having both a .couples card and a !couples card in the animator prim.  Customizations to the .couples card should be overwritten by an update, but customizations to !couples should not.
- Put a no-copy "nadu" animation into the animator prim, then do an update.  It should be left in place (we never delete/replace no-copy anims).
- Check the "Experience" attached to the scripts in the updater.  It should be "OpenCollar" for all of them.

# Leash
# Capture
# Settings
# Animations
# Help
# Apps

- Try putting oc_bookmarks in your collar.  Then use the "rm bookmarks" command.  You should get a prompt, and then after clicking Yes the script should be removed from your collar.
# Animations
# Help
# Apps