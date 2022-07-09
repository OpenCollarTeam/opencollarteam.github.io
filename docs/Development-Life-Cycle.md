---
layout: home
title: OpenCollar Development Life Cycle
---

Developing OpenCollar requires collaboration and decisions from a bunch of
people.  This document outlines how that should work.

## Feature Decisions 

Someone's got to decide what we'll include in OpenCollar.  The founders
(Athaliah Opus and Nirea Mercury) have final decision-making power there,
but most features don't start with them.  Most often, someone in the community
has an idea, they propose it (either in chat or even better, as a pull
request), and if there's consensus that it's something we want in the collar,
it gets added.

That consensus is the hard part.  There are a lot of competing concerns at play:

1. Is this the kind of feature that we want in OpenCollar?
2. Will this feature be used by most users, or just a small subset?
3. How much does this new feature complicate OpenCollar?  Is the additional
   functionality worth that additional complexity?
4. Is this going to be a surprising change to how existing collar users expect
   things to work?
4. Who's going to do the work to add this?

If you want to propose a new feature for OpenCollar, there are a couple things
you can do to improve your odds of success:

* Communicate clearly, in durable written form.  If it's a small feature, then
a paragraph or two in a Github issue might be all you need.  If it's a big
feature, or especially if it's a complicated architectural change, then you
might need to create a separate document or diagrams to make it easy to
understand.
* Seek feedback.  Discuss your proposal with the project leaders and be
prepared with answers to the questions above.  [The OpenCollar Discord
server](https://discord.gg/ZPmABEmPEJ) is the best place for this.  Consider
gathering feedback from the larger community, such as through group chats or a
poll.

## Writing Code

Anyone can write code for OpenCollar.  You should commit changes on your own
Git fork, then submit them to the [official repository](https://github.com/opencollarteam/opencollar) in the form of a Github
[pull
request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests).  

New contributors, please sign our [Contributor Agreement](https://opencollar.cc/docs/contributor-agreement).  

Before submitting your changes, make sure that you have tested them inworld and
they function as expected.

If you're fixing a bug, please include a reference to the Github issue in your
pull request.

If you're adding a new feature that was already discussed and approved for
inclusion in the collar, include a reference to that conversation (like to a
Github issue or a Discord chat) so others have the full context.

If you're adding a new feature that hasn't already been approved for inclusion
in the collar, then the comments in your pull request can be where that
discussion takes place.

When at all possible, your pull request should contain just one "concern".
Don't make a pull request for 5 different bugs.  Please submit those as 5
different pull requests.  If adding a new feature, make the pull request for
just that feature, and not a bunch of other bug fixes as well.  This makes it
far easier for people to review your code and approve the easy stuff, while
tackling the hard/controversial stuff separately.

To ensure people can test your PR changes quickly and effectively, we ask that you  

- a. have a copy of the script available in-world with changes in place to send to testers, and    
- b. write a short explanation of the specific things that need testing, 
considering as best as you can all the possible ramifications of the change you are proposing, 
- c. put this explanation both in the PR discussion and in a notecard you can distribute in world with the script.

Your code should comply with the OpenCollar style guide.  (TODO: insert link
here).  In fact, some pull requests do nothing but change existing code to
comply with that style.  Such pull requests tend to have a lot of changes in
them.  When making such a pull request, please make it _only_ about style
changes.

Your pull request should also include an update to the [release
notes](https://github.com/OpenCollarTeam/OpenCollar/blob/master/RELEASE_NOTES.md)
file, containing a bullet point with a one-line summary of your change.

If you're adding a new feature, your pull request should include an addition to
the [manual test suite](Manual-Test-Suite.md) explaining how to test it.

## Reviewing Code

Thousands of people put their trust in OpenCollar every day by wearing our
scripts around their virtual necks.  To maintain that trust, we need to ensure
that any updates we release are stable and secure.  We also need to ensure that
new features have been approved as described above.  We use a [code
review](https://github.com/features/code-review/) process to ensure these
things.

If you have a pull request that you think is ready for merging into OpenCollar,
you can request a review in the [OpenCollar dev-chat
channel](https://discord.gg/D9hVHadFzD) in Discord, or the OpenCollar R&D
channel inworld, or by sending a direct IM to ròan (Silkie Sabra) or Nirea
Mercury inworld.  For more prompt attention, you should probably do all of the
above.

There are two kinds of review, which can be combined or approached separately depending on
the work flow and abilities of a particualar reviewer and the nature of the pull request.  

1) Any volunteer can test the script inworld and verify that it performs to the relevant specifications.   
2) Any volunteer who knows LSL and OpenCollar code can review the script to verify that it complies with the [style guide](https://opencollar.cc/docs/Script-Style-Guide) and improves the codebase.  

All pull requests need an approving review from someone other than the party who submitted the review.  
- The party submitting the review should alert team members to review the pr or assign it to someone.  
- For most minor edits and bug fixes, a simple inworld test is sufficient.  
- If the requester desires a code review, or the person assigning the pull request to a reviewer requests it, a code review may also be required.   
- For new features that will change the way users experience the collar, there should be discussion among core team members between the review phase and the merge.
Once the pull request receives the required approving reviews, the code can be merged into the next release branch.  
- The main branch is current release and should not be targeted for merging code (Exceptions to this might include changes to code that is not in the collar release cycle, or rarely, urgent bug fixes requiring an immediate minor release) .

When reviewing a pull request, the reviewer will ask themselves the following
questions:

### For Testers
- Do I understand what the specifications are for this change and what it is supposed to accomplish? 
- Does it work as expected? 
- If a chat command is expected, has it been included?  
- Does it work as expected for each rank of user?
- Does it work despite all the conditions I can throw at it?
- Is it a bug fix or a feature? 
- If it's a new feature or results in a changed user experience, alert the team that it may need discussion before merge.   

### For Coders
- Can I understand this code?  If the reviewer can't understand what's going
  on, they will leave a comment like "Can you explain what's going on here?" Such
  occasions may point out places where there should be more comments in the code,
  a clearer structure to the code, or a separate design doc that will help coders
  understand how it's supposed to work.
- Does this code comply with the [style_guide](/docs/Script-Style-Guide)?
- Will this code actually work?
- Does this change improve the overall health of the codebase?
- Is the change going to introduce any new security problems? (E.g., ways for
  someone not on the collar's Owner/Trusted lists to send commands that they
  shouldn't be able to send.)
- Is there an entry in the [release
notes](https://opencollar.cc/ReleaseNotes)
  for this change?
- Is this a new feature?  If so, is there consensus among the project leaders
  that it's a feature that should be in the collar?  Is there an update to the
  manual test suite describing how to test the new feature?  Are there updates
  to the documentation explaining how to use the new feature?

Note that review does NOT include asking whether the code is perfect.  If it
[definitely improves the overall health of the
codebase](https://google.github.io/eng-practices/review/reviewer/standard.html),
that's enough.

The reviewer will use comments in the pull request to provide suggestions or
point out problems.

If your pull request is just a bug fix, then the review should be quick and
easy.  If the pull request contains a new feature that hasn't yet been approved
for inclusion in the collar, then the pull request will sit while that
discussion takes place. If the feature doesn't get approved by the project
leadership, the pull request will be closed.

### Adding Reviewers

We can (and should!) add more reviewers over time.  A reviewer will be added if:

1. They know how to code in LSL, and know the OpenCollar style guide.
2. They know how security and access control work in OpenCollar, and will not
   approve changes that undermine them.
3. They have a track record of positively contributing to the OpenCollar
   community.
4. They understand the difference between bug fixes and new features, and will
   refrain from merging new features that don't have clear consensus or
   approval from the project leaders.

## Branches

The master branch of the OpenCollar repository on Github will always contain
the current official version of the code.  All public releases will be merged
there before being copied inworld and distributed in the update system.

New features for the upcoming feature release will be aggregated into a
collector branch for that feature release, with a name like "features-2021-q2".
Pull requests that contain new features should target the current feature
branch, and should pull it in to ensure that they're compatible with other
features being released at the same time.

Bug fixes should target the master branch.  If we decide to bundle several bug
fixes into one release, we can make a separate collector branch for it.

## Testing and Releasing

There are two kinds of OpenCollar releases, each with their own process:

### 1. Feature releases

These happen fairly infrequently (maybe once per quarter).  They contain new
features that have been approved for inclusion in the collar and had a full
manual test review.

Process:

1. The project leaders and scripters decide it's time to release the feature branch.
2. All of the features are merged into the collector branch (if they haven't been already).
3. One of the approved code signers (Nirea or Aria, presently) copies the code
   inworld, sets it to the "OpenCollar" experience, and includes it in an updater object.
4. The testing coordinator distributes the updater object to the R&D group and
   to tester volunteers as a release candidate.
5. Volunteer testers collaborate to check all the things in the [manual test
   suite](https://opencollar.cc/docs/Manual-Test-Suite.html).  The testing coordinator keeps track of which
   tests have passed and which have failed.
6. If there are failed tests, fixes must be committed, reviewed, and merged.
   The failed tests will be repeated, as well as tests for any features likely
   to be affected by the fix.
7. When all tests pass, the version number is incremented appropriately, and
   the updater is given to Nirea to install in the inworld distribution system.

### 2. Bugfix releases

Bugfix releases can happen at any time.  They will not happen for all bugs.  A
bugfix release will only be made if the bug (or bundle of bugs) is big enough
that the pain of making everyone update is less than the pain of just living
with the bug(s).

Process:

1. The project leaders and scripters decide it's time to make a bugfix release.
2. One of the approved code signers (Nirea or Aria, presently) copies the code
   from the bugfix branch (or collector branch) inworld, sets it to the
   "OpenCollar" experience, and includes it in an updater object.
3. An ad-hoc group of testers (or a single tester, for very small changes)
   validates that the fix works as intended, as well as related functionality
   that may have been affected by the fix.
4. If there are failed tests, fixes must be committed, reviewed, and merged.
   The failed tests will be repeated, as well as tests for any features likely
   to be affected by the fix.
5. When all tests pass, the version number is incremented appropriately, and
   the updater is given to Nirea to install in the inworld distribution system.

### Versioning

OpenCollar follows [semantic versioning](https://semver.org/).  OpenCollar
version numbers contain three parts, joined by a dot.  Those parts are the
major version, minor version, and patch version.  In the number 8.2.1, the
major version is 8, the minor version is 2, and the patch version is 1.

The patch version will be incremented at every bugfix release.

The minor version will be incremented at every feature release.

The major version will be incremented when a feature release breaks
backwards compatibility with commands, 3rd party plugins, or interfaces to
other systems (remote, AO, cuffs, furniture, etc.)

Not every version number will see a public release.  Sometimes a problem is
caught with a version before it gets distributed.  To avoid confusion in that
case, its version number will be skipped and the next one (containing the
fixes) will be used.
