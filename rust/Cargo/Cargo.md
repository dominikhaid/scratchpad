# A binary

cargo new foo

# OR A library

cargo new --lib foo

```
foo
├── Cargo.toml
├── src
│   └── main.rs
│   └── lib.rs
└── tests
    ├── my_test.rs
    └── my_other_test.rs

```

# Cargo.toml

```
[package]
name = "foo"
version = "0.1.0"
authors = ["mark"]
build = "build.rs"

[dependencies]
clap = "2.27.1" # from crates.io
rand = { git = "https://github.com/rust-lang-nursery/rand" } # from online repo
bar = { path = "../bar" } # from a path in the local filesystem

```
