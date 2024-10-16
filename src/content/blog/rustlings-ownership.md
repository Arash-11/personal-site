---
author: arash-11
pubDatetime: 2023-02-26
title: Rust's immutability and ownership
postSlug: rustlings-ownership
featured: false
description: A closer look at Rust's immutability and ownership rules through Rustlings' move_semantics6 exercise.
---

I was working on the Rustlings’ move_semantics6 exercise, when I noticed something that made me stop and think about why what I did worked.

This is the uncompiling code given that we need to fix:

```rs
fn main() {
    let data = "Rust is great!".to_string();

    get_char(data);

    string_uppercase(&data);
}

// Should not take ownership
fn get_char(data: String) -> char {
    data.chars().last().unwrap()
}

// Should take ownership
fn string_uppercase(mut data: &String) {
    data = &data.to_uppercase();

    println!("{}", data);
}
```

To make the code compile, we can go ahead and update it to the following:

```rs
fn main() {
    let data = "Rust is great!".to_string();

    get_char(&data);

    string_uppercase(data);
}

// Should not take ownership
fn get_char(data: &String) -> char {
    data.chars().last().unwrap()
}

// Should take ownership
fn string_uppercase(mut data: String) {
    data = data.to_uppercase();

    println!("{}", data);
}
```

As the exercise’s first comment indicates, `get_char` should not take ownership of the value being passed to it. So a fix is to have it borrow the value instead. So far so good!

Now onto the `string_uppercase` function, we can just remove the `&`. The function takes ownership of the code, the code compiles and Rustlings tells us that we're good to move on!

But wait a minute. In `main`, the `data` variable is not declared to be mutable but the `string_uppercase` function takes a `mut data` argument.. what? Why does this work?

To get our answer, we need to think about what immutability and ownership in Rust actually mean. If we go to [chapter 3 of the Rust book](https://doc.rust-lang.org/book/ch03-01-variables-and-mutability.html), we can see the following:

> As mentioned in the “Storing Values with Variables” section, by default, variables are immutable.
>
> . . .
>
> When a variable is immutable, once a value is bound to a name, you can’t change that value.

What we can understand from this is that it’s the variable that is immutable and not the value. Rust’s immutability rules tells us whether we can mutate the **values of a variable**.

A mental model we can have is that the values themselves are not immutable or mutable, they just exist. A variable that holds or points to a certain value is immutable when you cannot make it hold or point to a different value. And it’s mutable when you can make it hold or point to a different value.

In our above code, as per <a href="https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html" target="_blank" rel="noopener noreferrer">Rust’s ownership rules</a>, a “move” occurs when we pass `data` to the `string_uppercase` function; i.e. `string_uppercase` takes ownership of the value. As a new owner, it can set the mutability of the _value_ that it receives to anything it wants - again, it’s not the variable, it’s the value that it needs and receives. And the function declaration sets the value of `data` mutably.

As a test, if we make the `data` variable mutable in main:

```rs
fn main() {
    let mut data = "Rust is great!".to_string();

    get_char(&data);

    string_uppercase(data);
}
```

The compiler gives us the following warning:

```sh
warning: variable does not need to be mutable
 --> src/main.rs:2:9
  |
2 |     let mut data = "Rust is great!".to_string();
  |         ----^^^^
  |         |
  |         help: remove this `mut`
  |
  = note: `#[warn(unused_mut)]` on by default
```

This warning is shown because within the scope that the `data` variable is being used, it’s never being mutated or passed somewhere as a mutable reference — if `data` were being passed to a function mutably, the receiving function’s type signature would be `&mut String` as opposed to just `String` as is the case in the `string_uppercase` function.

As an example, note the difference in the keyword `mut`'s position in the following two cases:

1. `string_uppercase(mut data: String)` - this indicates that `data` is a mutable variable that "holds" a _moved_ `String`.
2. `string_uppercase(data: &mut String)` - this indicates that `data` is an immutable variable that "holds" a mutable reference to a `String`.

---

To summarize, immutability in Rust applies to variables and not values. Once a function or a variable becomes the new owner of a value, it can make it mutable or immutable regardless of the value's previous owner's mutability declaration. And that there’s a difference between a move where a value’s new owner may be mutable and a mutable borrow - in this case, the type signatures and function signatures will differ too.

---

I'd love to hear if you have any comments. You can reach out to me on <a href="https://x.com/arash11gt" target="_blank">Twitter</a>.
