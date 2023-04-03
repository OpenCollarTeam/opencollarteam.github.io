---
layout: home
title: OpenCollar Cuffs
---
The OpenCollar Cuffs are available inworld at the OpenCollar Headquarters. 

OpenCollar Addon Cuffs Version 1.0.0
OpenCollar Cuff Addon Builder's Guide and Configuration

# Highlights

1. A full set of cuffs will include 9 objects. There are 4 arm cuffs and 4 leg cuffs plus a belt. Additional options include Piercings.
2.  Cuff animations are typically placed in Right Wrist (for Arm poses) and Right Ankle (for Leg poses), but this is not a rule. Additional poses can be placed in the belt, for example. Animations can be placed in any attachment.
3. Corresponding Arm and Leg notecards are also typically placed in the Right Wrist and Right Ankle cuff (See Cuff Poses section below).
4. Every cuff in the set needs a CuffConfig notecard, naming the chain points associated with that cuff. Cuffs that do not have poses in the contents need to edit the CuffConfig to indicate the NoPose condition. 
5. Every cuff with the Pose condition needs the oc_cuff_pose script.
6. Every cuff needs the oc_cuffs script. Put this in last, otherwise you will get an error message.
7. *Collar* animations can be associated with chainpoints using the Collar notecard
8. Typical restrictions in the Arm and Leg notecard can include: touchall,showinv,viewnote,edit (Complete list further on)


# Builder's Guide

## Build an Attachment that Supports Chains
- Create a visual representation of your Object.
- This could be either a Mesh or a Prim build (Rigged mesh is not supported).
- Rez the Object to the ground
- create a prim (cube) for each Chain Attachment Point you want to support.
    *Note: Invisible prims generate high complexity
- Name the newly created Prims according the name-list (see Naming Guide.md for details)

## Link Prims
- First select the Prims, then select the Object and click the Link button.
- Make sure the Prims are highlighted blue and the visible Object is highlighted yellow (root)
- Check “Edit Linked” in the build menu and select the Prims.
- Go to “Texture” tab
- Click on the Texture and select “Transparent”
- Uncheck “Edit Linked”
- Add the notecards and cuff scripts required (to the root prim)
- (optional) add “~nohide” in the description of all prims that should not hide/unhide. Other options include ~notexture ~nocolor ~noshiny ~noglow

## Collar Attachment Points 
- The collar can have up to 4 chain attachment points. They are created and linked to the collar the same way the other attachments are. Attachment points should be named rcollar, lcollar, bcollar, and ooc respectively.

## Cuff Poses
In order to use Cuff poses, you need to create a notecard. Move the notecard and the animations into the cuff contents, next to the oc_cuffs script. Animations and notecards are typically placed in Right Wrist (Arms) and Right Ankle (Legs)

### Cuff Poses Notecard Creation]-
1. The Notecard has a set of 5 lines for each Animation.
2. The Syntax is as follows:
  - Name: <Pose Name>   
    (You can name the pose as you want. But be aware that there can be only 11 letters shown in the Dialog.)
  - Anim: <Animation Name>   
    (The name of the Animation)   
  - PoseChains: <Chain Config>  
    (Chain Configuration: A list of chain attach points where the chain should start and stop. See below.)
  - PoseRestrictions: <RLV-Commands without the “@”>  
    (A comma separated list of RLV-Restrictions that will be applied when the Pose is started)  
    (There is a special command that can be used: “move” will block movement)   
   - PoseAge
   - PoseGravity

3. Syntax of the Chain Configuration:
   - `startpoint=endpoint~startpoint=endpoint`   
    (Empty lines and Lines beginning with # will be ignored)

4. Two Example Config Entries:

   - Example One   
`PoseName:Belt   
PoseAnim:cuff-belt2  
PoseChains:illac=lbelt~irlac=rbelt~iluac=bbelt~iruac=bbelt~bluac=bruac  
PoseRestrictions:touchall,showinv,viewnote,viewscript,viewtexture,edit   
PoseAge:5  
PoseGravity:0`  
   - Example Two   
`PoseName:Pinion   
PoseAnim:cuff-pinion    
PoseChains:bluac=bruac~bruac=bbelt~bbelt=bluac~fluac=fllac~fruac=frlac~bllac=lbelt~brlac=rbelt   
PoseRestrictions:touchall,showinv,viewnote,viewscript,viewtexture,edit   
PoseAge:5   
PoseGravity:0`

5. PoseChain Config Specific Example:   
    'rlac=llac~ruac=luac'   
    (This will spawn a chain to the lower left arm cuff from the lower right arm cuff and another chain to the left upper arm cuff from the right upper arm cuff. The second prim name is the end or target of the chain particles, the first prim name is the beginning or emitter of the chain particles)   
    (see NamingGuide.md for a full list of possible chainpoints)

6. Caveats: There can be only one chain starting from a Chain attachment point, but there can be several chains end at the same Chain attachment point.

- Restrictions can include: emote, sendchat, rcvchat, rcvemote, whisper, normal, shout, sendim, rcvim, starim, sendgesture, showinv, showminmap, showworldmap, showlock, shownames, shownametags, shownearby, showhovertext, showhovertexthud, showhovertextworld, showhovertextall, tplm, tploc, tplocal, tplure, tprequest, edit, editobj, rez, viewnote, viewscript, viewtexture, fartouch, interact, touchattach, touchattachself, touchattachother, touchhud, touchworld, touchall, fly, jump, unsit, sit, sittp, standtip, alwaysrun, temprun, camunlock, blur view, setcam_avdistmax:2 (default value), setcam_avdistmin:1 (default value), addattach, remattach, addoutfit, remoutfit, move.   

7. Additional Notecard Settings:   
    `IgnoreHide:<value>`   
    (When value=1, ignore hide command from the Collar-plugin, Default is 0)   
    `DefaultHide:<value>`   
    (When value=1, automatically hide the item. Only works when IgnoreHide is 1) (see above).   
    `Button:<Button Name>`   
    (Add a Button to the Devices menu. A Submenu will be created with the same name as the notecard in the attachment. Inside this Submenu there will be the new Button)   

### CuffConfig Notecard 
As noted earlier, each cuff in the set needs a CuffConfig notecard, naming the chain points attached to that specific cuff. Cuffs that do not have poses in the contents need to edit the CuffConfig to indicate the NoPose condition. Typical entry in the CuffConfig might look like the following example:   
       ` Cuffname Right Ankle   
        Poses = Legs   
        # Poses = Arms   
        # CollarPoses = Collar   
        # NoPoses   
        MyPoint = brllc   
        MyPoint = frllc   
        MyPoint = irllc   
        MyPoint = rllc   
        LMV2Map = rlcuff > rllc   
        LGv2Map = rightankle > rllc > ankles > rllc > allfour > rllc`   
    (This example is from the Right Lower Leg Cuff so most likely the note will indicate Poses = Legs, and Noposes is commented out with the # symbol along with the reference to Collar poses)   
    In the example above, "Cuffname" is the button name which will appear in the Addons Menu

### oc_cuff_pose.lsl Script 
   
Every cuff with the Poses condition needs the oc_cuff_pose script. In other words if there are poses in the cuff you need the CuffConfig to indicate Poses = [NoteCardName] and you need the oc_cuff_pose script in the cuff contents.

### *Collar* Poses

In order to see chains when a Pose of the Collar is running, you need to create a Notecard named “Collar” and put it into one of the set of cuffs. Inside this Notecard, you need to add all the names of the animations you want to have chains.
The syntax is as follows:   

    [tower]
    `Chains = frlac=fllac~frulc=flulc~irulc=ilulc~irllc=illlc~rulc=rllc~lulc=lllc`

    Animation Name is bracketed   
    Chain Configuration: The list of chain-points (see Attachment Poses)   

- The CuffConfig notecard must identify the Collar notecard (for example CollarPoses = Collar) and the cuff must have the oc_cuff_pose.lsl script  
    
- Please note: The Collar notecard syntax is slightly different than the Arm cuff or Leg cuff notecard. The Collar notecard uses two lines rather than three or four. This is because pose names in the collar are managed by the collar. The only thing the Collar notetcard needs to do is associate a pose with a specific set of chain points.

- Additional Script Required in the collar: If needed, Themes Support and Resize Support can be included in each cuff
   
### Resizer
-   A resizer script has been created, based on the Collar Resize script. The oc_resizer script should be placed in every cuff in the set. The Cuff Resize button can then be found in the cuff menu when you touch each cuff. Support for the resizer is included in the oc_cuff script beginning with version 2.1.5

### Cuff Themes: 

-   A script can be included in each cuff to silently listen to the Themes app in the collar. When properly set up, the oc_cuff_theme.lsl script can work together with .theme notecards to allow the user to change the texture and color theme of the individual cuffs. The instructions for creating .theme notecards can be found at https://opencollar.cc/docs/Themes.
-   It's important to remember a few basic rules of theme creation. Each notecard should address specific parameters of the cuff it's placed in. Cuff prim link numbers and the face numbers of those linked prims are vital. Additionally, just as in the collar, the .theme notecard needs to have the least amount of parameters to have it work without too much delay, while at the same time the list of Required Parameters by Constant needs to be adhered to, so you can avoid error messages. I can not stress enough the suggestion to review the collar Themes document in the Complete User's Guide referenced above.
-   The oc_cuff_themes script should be placed in each cuff where you want to control the cuff appearance. Each cuff should also include the themes notecards specific to that cuff, with the name of the notecard matching the name of the collar .theme notecard. For example, if you have 2 textures you want to use, one black and one white, place the parameter information for the black in a notecard named Black.theme, and the parameter information from the white into a notecard named White.theme (the collar should also have the same notecard names). When the Apps/Themes/Apply Theme menu is opened, the button for Black, and White will be displayed. When the button for Black is clicked, the collar and cuffs will both attempt to apply the parameters from the Black.theme notecard.
