The Leash is keyed to access rank. Public Access, Group Access, and Trusted cannot take the leash if the wearer is leashed to the Owner. If OwnSelf is unchecked, the wearer cannot unleash herself from any rank of access without using the collar safeword. If the wearer initiates the leash using Pass, the wearer can unleash.  

To call the leash menu:  
>[prefix] leashmenu

## Grab  
Grabs the wearer's leash  
>[prefix] grab or [prefix] leash  

## Anchor
Calls a menu of nearby objects to which the wearer can be leashed  
>[prefix] anchor

## Pass
Calls a menu of nearby avatars to whom the leash can be passed. When selected, the avatar gets a request.
>[prefix] leashto 

## Follow
Operates the leash in exactly the same way but without the visible particle chain.
>[prefix] follow

## Length
Sets the length of the leash in meters. 1 meter is the minimum length, 20 meters is the maximum.
>[prefix] length [number]

## Configure
In this menu you can change the texture of the leash particles, and also set rlv restrictions on the leashed avatar.  

**Customizing note**  You can add your own textures to the leash.  There are two classes of texture, Classic and Ribbon.  Rename your texture starting with either `!ribbon` or `!classic`; for instance, `!ribbon_rope` for a rope texture.  Drop the renamed texture into the root prim which also contains the oc_particle script.  

### Strict  
When checked, sets tp restrictions on the wearer when leashed (owner is exempted by default):  
> fly (unable to fly)  
> tplm (cannot teleport to a landmark)  
> tploc (cannot teleport to a map location or click teleport to a point in the region)  
> tplure (cannot accept a tplure)  

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


