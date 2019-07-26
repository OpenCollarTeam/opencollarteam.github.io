---
layout: home
title: How Can I Tell If I'm Running an Official OpenCollar Release?
---

Given that the OpenCollar team releases all of our scripts full permissions, it's possible for anyone to build products on them or modify the scripts to do new and different things.  This is one of the great benefits of open source.

At the same time, users might want to verify that the version they're running is the same as what the OpenCollar team released, and has not been altered in some way.  To support that, we're compiling the scripts we release with an "experience key".  Though Second Life [experiences](https://community.secondlife.com/knowledgebase/english/experiences-in-second-life-r1365/) support a whole range of new features, we're only using our experience to support code verification.   Only certain members of the OpenCollar Staff group have power to compile scripts for this experience.  Third parties are free to modify the code and distribute the modifications, but they'll have to compile the scripts with their own experience key, or none at all.

If you've received a collar, updater, or other scripted object and you're not sure if it's an official release or not, follow these steps to check the experience key:

1. Rez the object inworld (you can't check experience keys on scripts in inventory).
2. Edit the object, and open the Content tab in the Edit dialog.
3. Right click the script and select Properties.
4. In the Properties window, you should see that the Experience is set to OpenCollar, which should appear as a link.  Clicking that link will open the Experience Profile.
5. The Experience Profile will show that the experience is linked to the OpenCollar Staff group.  (It's important to check the group on the experience profile page because the experience name alone is not enough to verify that the scripts were compiled by someone you trust.  Experience names *are not unique*.)
![Check script experience profile](https://raw.githubusercontent.com/OpenCollarTeam/OpenCollar/master/res/images/check_experience.png)

To be completely sure, repeat this process for every OpenCollar script in the object.

This is not something we expect everyone to do on every release.  Most of the time, just practicing good script hygiene is sufficient (i.e., only run scripts or wear objects from sources you trust).  But if you suspect that that an ill-intentioned person has tampered with the scripts you were given, this method will help you investigate that possibility.
