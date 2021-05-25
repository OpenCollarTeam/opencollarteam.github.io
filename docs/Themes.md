---
layout: home
title: Themes
---

The oc_themes script applies textures to the faces of your mesh collar design. Creating themes is a Building feature and requires a full permission collar model.
If you have a full permission collar (Copy/Modify/Transfer), you will see both an Apply Theme and a New Theme button in the Themes App menu. 
Setting your collar to No Transfer in the Next Owner permissions will prevent the next owner of the collar (your customer) from generating New Theme data. 

To do this it is much easier if you have intermediate or better building skills.  Prims are the linkable and unlinkable parts of an object.  Prims have link numbers.  Faces are the surfaces of a prim that can accept a separate texture, color, alpha or glow. Faces have face numbers.

# Configuring Themes

1. Set up your collar design with a default appearance. Apply textures, colors and other attributes so your collar looks finished.

2. Once you are happy with your collar's appearance, go to the Apps | Themes menu of your collar. When you click the New Theme button, the script 
will "dump" the collar face parameters list into the Local Chat window. 
   * The resulting chat log contains a block for every prim in the collar.  Each block starts with the number and name of the prim in brackets, followed by a value 
   that tells if the name and link number have to match or if the script will use just the link number.  For instance:  
   `[1/OpenCollar/0]` Says "This is link #1, its name is OpenCollar, use just the link number".
   * The entire group of lines after this describes in order, the description and name of the prim, followed by each face of the prim and say what texture or other visual value to apply there.  !0 is face #0, !1 is face #1, etc.

2. Copy and paste this dump to a text editor.  Delete all the time stamps from the start of each line.  Copy the parameters you want to use from the chat log (dump) in the text editor to a notecard.

3. Name your notecard [Name].theme, where [Name] is the unique name to describe your theme. The oc-themes script will use this [Name] in the 
Apply Theme menu. For instance, a notecard named Default.theme will show in the Apply Theme menu as Default.  
Collar designers can use this face parameters list to create multiple themes for your design. Because of SecondLife notecard size limitations, 
(64 KB limit) you may want to paste this parameters list to an external text editor like Notepad.

4. **What to Leave Out.** Reduce this file to the barest essentials. You can do this either in your text editor or in the notecard itself.  When applying a theme to your collar, the oc_themes script will read each line of the .themes notecard one at a time, applying that parameter 
to the indicated collar face before reading the next line in the notecard. Depending on sim processing speed, this could take as much as a 
second per line. Because of this, you will want to remove every line in the notecard which is not necessary. For example, if all of your 
collar themes use the default white Color tint, this parameter will never change between themes and should be removed from the notecard. 

   * Any lines that reference prims that will always remain invisible eg. Leashpoint, FloatText should be removed entirely from the [Name].theme 
notecard. For instance, because each face can have up to 21 parameters in the [Name].theme notecard, the small, invisible LeashPoint cube (6 faces) 
used in your collar would generate 126 lines of unneeded parameters.

5. **What Not to Leave Out.**  It's important to note that many face parameters are dependent on other parameters if they are to be used by a script. The oc_themes script will report an error if a dependent parameter is not included. If, for example your themes will use a Shininess setting, you must also include 
a value for Bump, as both parameters are needed for the PRIM_BUMP_SHINY constant. Likewise, if you remove a color reference, you 
will also need to remove the reference to Alpha, as the script needs both parameters in the PRIM_COLOR constant, and will report an error if 
one parameter is included and the other is not.

Here is a list of Required Parameters by Constant:

  > PRIM_COLOR needs color, alpha   
  > PRIM_TEXTURE needs texture uuid, repeats, offsets, rotation   
  > PRIM_GLOW intensity not dependent   
  > PRIM_NORMAL needs texture uuid, repeats, offsets, rotation   
  > PRIM_SPECULAR needs texture uuid, repeats, offsets, rotation, color, glossiness, environment   
  > PRIM_FULLBRIGHT boolean not dependent   
  > PRIM_BUMP_SHINY needs shiny, bump   

# Finished !
Once you have generated a working .themes notecard for your collar's default appearance, you can make spin off multiple copies, renaming 
each notecard as needed to generate unique names in the Apply Theme menu. Then go into the new notecard and make changes as necessary for that 
theme to be properly applied. When you have added your .theme notecards to the collar contents, the collar will report how many themes are in 
the collar's inventory, and restart the collar.

> Contributed by Ping Duffield and Silkie Sabra

