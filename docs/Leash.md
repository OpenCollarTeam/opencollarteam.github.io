---
layout: home
title: The Leash Menu
---

The Leash is keyed to access rank. Public Access, Group Access, and Trusted cannot take the leash if the wearer is leashed to the Owner. If OwnSelf is unchecked, the wearer cannot unleash herself from any rank of access without using the collar safeword. If the wearer initiates the leash using Pass, the wearer can unleash.  

To call the leash menu:  
>[prefix] leashmenu

## Grab  
Grabs the wearer's leash  
>[prefix] grab or [prefix] leash

## Unleash
Unleashes the wearer. Visible when the leash is engaged.   
>[prefix] unleash

## Anchor
Calls a menu of nearby objects to which the wearer can be leashed  
>[prefix] anchor

## Pass
Calls a menu of nearby avatars to whom the leash can be passed. When selected, the avatar gets a request.
>[prefix] pass 

## Follow
Operates the leash without the visible particle chain.
>[prefix] follow

## Face
Allows the wearer to be turned to face an avatar or object.  Calls a menu with a list of nearby avatars and objects.
>[prefix] face -- opens a menu of targets to turn collar wearer to face
>[prefix] face me -- turns the collar wearer to face the speaker
>[prefix] face [name] -- turns the collar wearer to face an avatar or object whose name starts with [name]

## Length
Sets the length of the leash in meters. 1 meter is the minimum length, 20 meters is the maximum.
>[prefix] length [number]

## Configure
In this menu you can change the texture of the leash particles, and also set rlv restrictions on the leashed avatar.  

**Customizing note**  You can add your own textures to the leash.  There are two classes of texture, Classic and Ribbon.  Rename your texture starting with either `!ribbon` or `!classic` plus one character such as a space or underline, followed by your custom texture name as you want it to appear on a button; for instance, `!ribbon_rope` will show up in the Leash > Configure menu as "Rope".  Drop the renamed texture into the root prim which also contains the oc_particle script.  There is a limit of one extra button each for a custom ribbon and a custom classic particle texture.

### Strict  
When checked, sets tp restrictions on the wearer when leashed (owner is exempted by default).  Three way toggle : Strict On, Strict Ish, Strict Off.   
- Strict leash setting:  `LEASH=Strict~1/0,503`. The three digit number at the end is the integer denoting the access rank of who set Strict.  "503" is the Wearer rank.  
Restrictions include:  
> fartouch (unable to touch objects whose center is more than 1m distant)   
> fly (unable to fly)  
> tplm (cannot teleport to a landmark)  
> tploc (cannot teleport to a map location or click teleport to a point in the region)  
> tplure (cannot accept a tplure)
- The Strict-ish setting does not restrict `fartouch`.   
> [prefix] strict ish/off/on.

#### Shine  
Toggles shine on and off, requires Advanced Lighting to view the effect  
#### Turn
When checked forces the wearer to turn toward the leasher  
#### Chain | Silk
These settings set chain and silk texture on the leash particles
#### Invisible  
When checked turns off the leash particles.  See Follow in the leash menu.  
#### Feel
In this menu you can change the size and weight of the leash.  **Bigger | Smaller** changes the size of the particles; **Heavier | Lighter** changes the arc of the particles.  
#### Color  
Here you can select the desired color of the leash particles.


