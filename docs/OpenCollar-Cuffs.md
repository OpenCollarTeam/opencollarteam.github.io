---
layout: home
title: OpenCollar Cuffs!
---
The OpenCollar Cuffs are available inworld at the OpenCollar Theater. 

OpenCollar Addon Cuffs Version 1.0.0
OpenCollar Cuff Addon Builder's Guide and Configuration

--Highlights--

1.) A full set of cuffs will include 9 objects. There are 4 arm cuffs and 4 leg cuffs plus a belt. Additional options include Piercings.
2.) Cuff animations are typically placed in Right Wrist (for Arm poses) and Right Ankle (for Leg poses), but this is not a rule. Additional poses can be placed in the belt, for example. Animations can be placed in any attachment.
3.) Corresponding Arm and Leg notecards are also typically placed in the Right Wrist and Right Ankle cuff (See Cuff Poses section below).
4.) Every cuff in the set needs a CuffConfig notecard, naming the chain points associated with that cuff. Cuffs that do not have poses in the contents need to edit the CuffConfig to indicate the NoPose condition. 
5.) Every cuff with the Pose condition needs the oc_cuff_pose script.
6.) Every cuff needs the oc_cuffs script. Put this in last, otherwise you will get an error message.
7.) *Collar* animations can be associated with chainpoints using the Collar notecard
8.) Typical restrictions in the Arm and Leg notecard can include: touchall,showinv,viewnote,edit (Complete list further on)


--Builder's Guide--

-[Build an Attachment that Supports Chains]-
- Create a visual representation of your Object.
- This could be either a Mesh or a Prim build (Rigged mesh is not supported).
- Rez the Object to the ground
- create a prim (cube) for each Chain Attachment Point you want to support.
    *Note: Invisible prims generate high complexity
- Name the newly created Prims according the name-list (see Naming Guide.md for details)

-[Link Prims]
- First select the Prims, then select the Object and click the Link button.
- Make sure the Prims are highlighted blue and the visible Object is highlighted yellow (root)
- Check “Edit Linked” in the build menu and select the Prims.
- Go to “Texture” tab
- Click on the Texture and select “Transparent”
- Uncheck “Edit Linked”
- Add the notecards and cuff scripts required (to the root prim)
- (optional) add “~nohide” in the description of all prims that should not hide/unhide. Other options include ~notexture ~nocolor ~noshiny ~noglow

-[Collar Attachment Points]- FUTURE
- The collar can have up to 4 chain attach points. They are created and linked to the collar the same way the other attachments are. Attachment points should be named rcollar, lcollar, bcollar, and ooc respectively (This may need to wait until OC 8.1.0 for implementation)

-[Cuff Poses]-
- In order to use Cuff poses, you need to create a notecard. Move the notecard and the animations into the cuff contents, next to the oc_cuffs script. Animations and notecards are typically placed in Right Wrist (Arms) and Right Ankle (Legs)

-[Cuff Poses Notecard Creation]-
-The Notecard has a set of 5 lines for each Animation.
The Syntax is as follows:
    Name: <Pose Name>
    (You can name the pose as you want. But be aware that there can be only 11 letters shown in the Dialog.)
    Anim: <Animation Name>
    (The name of the Animation)
    PoseChains: <Chain Config>
    (Chain Configuration: A list of chain attach points where the chain should start and stop. See below.)
    PoseRestrictions: <RLV-Commands without the “@”>
    (A comma separated list of RLV-Restrictions that will be applied when the Pose is started)
    (There is a special command that can be used: “move” will block movement)
    PoseAge
    PoseGravity

Syntax of the Chain Configuration:
    startpoint=endpoint~startpoint=endpoint…
    (Empty lines and Lines beginning with # will be ignored)

Two Example Config Entries:

PoseName:Belt
PoseAnim:cuff-belt2
PoseChains:illac=lbelt~irlac=rbelt~iluac=bbelt~iruac=bbelt~bluac=bruac
PoseRestrictions:touchall,showinv,viewnote,viewscript,viewtexture,edit
PoseAge:5
PoseGravity:0

PoseName:Pinion
PoseAnim:cuff-pinion
PoseChains:bluac=bruac~bruac=bbelt~bbelt=bluac~fluac=fllac~fruac=frlac~bllac=lbelt~brlac=rbelt
PoseRestrictions:touchall,showinv,viewnote,viewscript,viewtexture,edit
PoseAge:5
PoseGravity:0

PoseChain Config Specific Example:
    rlac=llac~ruac=luac
    (This will spawn a chain to the lower left arm cuff from the lower right arm cuff and another chain to the left upper arm cuff from the right upper arm cuff. The second prim name is the end or target of the chain particles, the first prim name is the beginning or emitter of the chain particles)
    (see NamingGuide.md for a full list of possible chainpoints)

Caveats: There can be only one chain starting from a Chain attachment point, but there can be several chains end at the same Chain attachment point.

Restrictions can include: emote, sendchat, rcvchat, rcvemote, whisper, normal, shout, sendim, rcvim, starim, sendgesture, showinv, showminmap, showworldmap, showlock, shownames, shownametags, shownearby, showhovertext, showhovertexthud, showhovertextworld, showhovertextall, tplm, tploc, tplocal, tplure, tprequest, edit, editobj, rez, viewnote, viewscript, viewtexture, fartouch, interact, touchattach, touchattachself, touchattachother, touchhud, touchworld, touchall, fly, jump, unsit, sit, sittp, standtip, alwaysrun, temprun, camunlock, blur view, setcam_avdistmax:2 (default value), setcam_avdistmin:1 (default value), addattach, remattach, addoutfit, remoutfit, move

Additional Notecard Settings:
    IgnoreHide:<value>
    (When value=1, ignore hide command from the Collar-plugin, Default is 0)
    DefaultHide:<value>
    (When value=1, automatically hide the item. Only works when IgnoreHide is 1) (see above).
    Button:<Button Name>
    (Add a Button to the Devices menu. A Submenu will be created with the same name as the notecard in the attachment. Inside this Submenu there will be the new Button)

-[CuffConfig Notecard] As noted earlier, each cuff in the set needs a CuffConfig notecard, naming the chain points attached to that specific cuff. Cuffs that do not have poses in the contents need to edit the CuffConfig to indicate the NoPose condition. Typical entry in the CuffConfig might look like the following example:
        Cuffname Right Ankle
        Poses = Legs
        # Poses = Arms
        # CollarPoses = Collar
        # NoPoses
        MyPoint = brllc
        MyPoint = frllc
        MyPoint = irllc
        MyPoint = rllc
        LMV2Map = rlcuff > rllc
        LGv2Map = rightankle > rllc > ankles > rllc > allfour > rllc
    (This example is from the Right Lower Leg Cuff so most likely the note will indicate Poses = Legs, and Noposes is commented out with the # symbol along with the reference to Collar poses)
    In the example above, "Cuffname" is the button name which will appear in the Addons Menu

-[oc_cuff_pose.lsl Script] Every cuff with the Poses condition needs the oc_cuff_pose script. In other words if there are poses in the cuff you need the CuffConfig to indicate Poses = [NoteCardName] and you need the oc_cuff_pose script in the cuff contents.

-[*Collar* Poses]-

In order to see chains when a Pose of the Collar is running, you need to create a Notecard named “Collar” and put it into one of the set of cuffs. Inside this Notecard, you need to add all the names of the animations you want to have chains.
The syntax is as follows:

    [tower]
    Chains = frlac=fllac~frulc=flulc~irulc=ilulc~irllc=illlc~rulc=rllc~lulc=lllc

    Animation Name is bracketed
    Chain Configuration: The list of chain-points (see Attachment Poses)

The CuffConfig notecard must identify the Collar notecard (for example CollarPoses = Collar) and the cuff must have the oc_cuff_pose.lsl script
    
Please note: The Collar notecard syntax is slightly different than the Arm cuff or Leg cuff notecard. The Collar notecard uses two lines rather than three or four. This is because pose names in the collar are managed by the collar. The only thing the Collar notetcard needs to do is associate a pose with a specific set of chain points.

- Additional Script Required in the collar: None at this time, everything is controlled through the oc_addons script.
