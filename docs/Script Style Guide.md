# OpenCollar LSL Style Guide

These guidelines should be considered when reviewing pull requests, along with
other considerations in the Development Life cycle doc.

## Principles

- Code for readability first.  Don't sacrifice readability to optimize
  performance unless you're addressing a specific performance issue in a specific
  script and the change produces a measurable improvement.
- Use descriptive names.  Sprinkling your code with magic numbers is a good way
  to repel potential collaborators.

## Variable Names

Variable names should start with a lowercase 1-letter prefix indicating the type, and should be `CamelCase` thereafter.

Good Example:

     sMsg

Bad Examples:

     Msg
     Message
     msg

Global variables should start with `g_`.  This comes before the type prefix.

Constants should be in `ALL_CAPS`.  Their values should be set once and not changed.

## Curly Braces

In general, `if` statements should use curly braces, like this:

```
if (iSomeCondition) {
  DoAThing();
  DoAnotherThing();
}
```

DO NOT omit the braces, even though LSL will let you get away with something like this:

```
// bad example.  Don't do this!
if (iSomeCondition)
  DoAThing();
```

The reason there is because then when someone comes along and adds a call to
`DoAnotherThing()`, it's actually _not_ inside the `if`.  

```
// bad example.  Don't do this!
if (iSomeCondition)
  DoAThing();
  DoAnotherThing(); // This line will ALWAYS execute, even if iSomeCondition is FALSE!
```

Including the curly braces from the beginning makes your code less likely to
break when someone else comes along and edits it.  This isn't just a
hypothetical.  Apple's infamous "[go to
fail](https://nakedsecurity.sophos.com/2014/02/24/anatomy-of-a-goto-fail-apples-ssl-bug-explained-plus-an-unofficial-patch/)"
bug would never have happened if the authors of their SSL library had used
curly braces in their if statements.

The only exception is when the body of the `if` statement is on _the same line_
as the `if`.

```
// This is tolerated, though still not recommended
if (iSomeCondition) DoAThing();
```
