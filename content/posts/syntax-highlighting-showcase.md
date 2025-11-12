---
title: "Syntax Highlighting Showcase"
date: 2024-05-12T09:30:00+01:00
draft: false
description: "A comprehensive showcase of syntax highlighting for multiple programming languages in Hugo"
summary: "Showcase of Hugo/Chroma syntax highlighting across many languages with configurable styles, line numbers, and line highlighting."
tags: ["syntax-highlighting", "code", "programming", "chroma"]
categories: ["documentation", "development"]
author: "Hugo Demo"

---

## Introduction

Hugo uses [Chroma](https://github.com/alecthomas/chroma) for syntax highlighting, supporting over 200 programming languages. This post demonstrates syntax highlighting across various languages including JavaScript, Python, Go, Rust, SQL, and many more. See beautiful code examples with line numbers and highlighted lines.

## Configuration

Enable syntax highlighting in `hugo.toml`:

```toml
[markup]
  [markup.highlight]
    anchorLineNos = false
    codeFences = true
    guessSyntax = false
    hl_Lines = ""
    hl_inline = false
    lineAnchors = ""
    lineNoStart = 1
    lineNos = false
    lineNumbersInTable = true
    noClasses = true
    noHl = false
    style = "monokai"
    tabWidth = 4
```

## Web Development

### HTML

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hugo Demo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Welcome to Hugo</h1>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <article>
            <h2>Article Title</h2>
            <p>Content goes here...</p>
        </article>
    </main>
    <footer>
        <p>&copy; 2024 Hugo Demo</p>
    </footer>
    <script src="main.js"></script>
</body>
</html>
```

### CSS

```css
:root {
    --primary-color: #386641;
    --secondary-color: #6a994e;
    --accent-color: #bc4749;
    --background-color: #f2e8cf;
    --text-color: #333;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

header {
    background-color: var(--primary-color);
    color: white;
    padding: 2rem 0;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 0 1rem;
    }
    
    nav ul {
        flex-direction: column;
    }
}
```

### JavaScript

```javascript
// Modern JavaScript ES6+
class BlogPost {
    constructor(title, author, content) {
        this.title = title;
        this.author = author;
        this.content = content;
        this.createdAt = new Date();
    }
    
    publish() {
        console.log(`Publishing: ${this.title}`);
        return fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this)
        })
    }
}

// Arrow functions and async/await
const fetchPosts = async () => {
    try {
        const response = await fetch('/api/posts');
        const posts = await response.json();
        return posts.filter(post => post.published);
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return [];
    }
};

// Array methods
const posts = [
    { id: 1, title: 'First Post', likes: 42 },
    { id: 2, title: 'Second Post', likes: 17 },
    { id: 3, title: 'Third Post', likes: 99 }
];

const popularPosts = posts
    .filter(post => post.likes > 20)
    .map(post => ({ ...post, popular: true }))
    .sort((a, b) => b.likes - a.likes);

console.log(popularPosts);
```

### TypeScript

```typescript
interface Post {
    id: number;
    title: string;
    content: string;
    author: Author;
    tags: string[];
    publishedAt?: Date;
}

interface Author {
    name: string;
    email: string;
    bio?: string;
}

class BlogService {
    private posts: Post[] = [];
    
    constructor(private apiUrl: string) {}
    
    async getPosts(): Promise<Post[]> {
        const response = await fetch(this.apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        this.posts = await response.json();
        return this.posts;
    }
    
    getPostById(id: number): Post | undefined {
        return this.posts.find(post => post.id === id);
    }
    
    filterByTag(tag: string): Post[] {
        return this.posts.filter(post => 
            post.tags.includes(tag)
        );
    }
}

// Generic function
function createPair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const pair = createPair<string, number>("age", 25);
```

## Backend Languages

### Python

```python
from datetime import datetime
from typing import List, Optional
import asyncio

class BlogPost:
    """A blog post with metadata and content."""
    
    def __init__(self, title: str, author: str, content: str):
        self.title = title
        self.author = author
        self.content = content
        self.created_at = datetime.now()
        self.tags: List[str] = []
    
    def add_tag(self, tag: str) -> None:
        """Add a tag to the post."""
        if tag not in self.tags:
            self.tags.append(tag)
    
    def __repr__(self) -> str:
        return f"BlogPost('{self.title}', by {self.author})"

# List comprehension
numbers = [1, 2, 3, 4, 5]
squares = [n**2 for n in numbers if n % 2 == 0]

# Dictionary comprehension
word_lengths = {word: len(word) for word in ['hugo', 'python', 'blog']}

# Async function
async def fetch_posts() -> List[BlogPost]:
    """Fetch posts asynchronously."""
    await asyncio.sleep(1)  # Simulate API call
    return [
        BlogPost("First Post", "Alice", "Content 1"),
        BlogPost("Second Post", "Bob", "Content 2")
    ]

# Decorator
def timer(func):
    """Time function execution."""
    def wrapper(*args, **kwargs):
        start = datetime.now()
        result = func(*args, **kwargs)
        duration = datetime.now() - start
        print(f"{func.__name__} took {duration}")
        return result
    return wrapper

@timer
def process_posts(posts: List[BlogPost]) -> None:
    for post in posts:
        print(f"Processing: {post.title}")
```

### Go

```go
package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    "time"
)

// Post represents a blog post
type Post struct {
    ID        int       `json:"id"`
    Title     string    `json:"title"`
    Content   string    `json:"content"`
    Author    string    `json:"author"`
    CreatedAt time.Time `json:"created_at"`
    Tags      []string  `json:"tags"`
}

// BlogService manages blog posts
type BlogService struct {
    posts []Post
}

// NewBlogService creates a new blog service
func NewBlogService() *BlogService {
    return &BlogService{
        posts: make([]Post, 0),
    }
}

// AddPost adds a new post to the service
func (s *BlogService) AddPost(post Post) {
    post.CreatedAt = time.Now()
    s.posts = append(s.posts, post)
}

// GetPosts returns all posts
func (s *BlogService) GetPosts() []Post {
    return s.posts
}

// HTTP handler
func postsHandler(w http.ResponseWriter, r *http.Request) {
    service := NewBlogService()
    service.AddPost(Post{
        ID:      1,
        Title:   "First Post",
        Content: "Hello, Hugo!",
        Author:  "Gopher",
        Tags:    []string{"go", "hugo"},
    })
    
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(service.GetPosts())
}

func main() {
    http.HandleFunc("/posts", postsHandler)
    fmt.Println("Server starting on :8080")
    http.ListenAndServe(":8080", nil)
}
```

### Rust

```rust
use std::collections::HashMap;
use chrono::{DateTime, Utc};

#[derive(Debug, Clone)]
struct Post {
    id: u32,
    title: String,
    content: String,
    author: String,
    created_at: DateTime<Utc>,
    tags: Vec<String>,
}

impl Post {
    fn new(id: u32, title: String, content: String, author: String) -> Self {
        Post {
            id,
            title,
            content,
            author,
            created_at: Utc::now(),
            tags: Vec::new(),
        }
    }
    
    fn add_tag(&mut self, tag: String) {
        if !self.tags.contains(&tag) {
            self.tags.push(tag);
        }
    }
}

struct BlogService {
    posts: HashMap<u32, Post>,
    next_id: u32,
}

impl BlogService {
    fn new() -> Self {
        BlogService {
            posts: HashMap::new(),
            next_id: 1,
        }
    }
    
    fn add_post(&mut self, mut post: Post) -> u32 {
        let id = self.next_id;
        post.id = id;
        self.posts.insert(id, post);
        self.next_id += 1;
        id
    }
    
    fn get_post(&self, id: u32) -> Option<&Post> {
        self.posts.get(&id)
    }
    
    fn filter_by_tag(&self, tag: &str) -> Vec<&Post> {
        self.posts.values()
            .filter(|post| post.tags.iter().any(|t| t == tag))
            .collect()
    }
}

fn main() {
    let mut service = BlogService::new();
    
    let mut post = Post::new(
        0,
        "Hello Rust".to_string(),
        "Content here".to_string(),
        "Rustacean".to_string()
    );
    post.add_tag("rust".to_string());
    post.add_tag("programming".to_string());
    
    let id = service.add_post(post);
    println!("Added post with ID: {}", id);
}
```

## Database & Query Languages

### SQL

```sql
-- Create tables
CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    author_id INTEGER REFERENCES authors(id) ON DELETE CASCADE,
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE post_tags (
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (post_id, tag_id)
);

-- Insert data
INSERT INTO authors (name, email, bio) VALUES
    ('Alice Smith', 'alice@example.com', 'Tech blogger'),
    ('Bob Johnson', 'bob@example.com', 'Developer advocate');

-- Complex query with JOIN
SELECT 
    p.title,
    p.published_at,
    a.name AS author_name,
    STRING_AGG(t.name, ', ') AS tags
FROM posts p
INNER JOIN authors a ON p.author_id = a.id
LEFT JOIN post_tags pt ON p.id = pt.post_id
LEFT JOIN tags t ON pt.tag_id = t.id
WHERE p.published_at IS NOT NULL
    AND p.published_at <= CURRENT_TIMESTAMP
GROUP BY p.id, p.title, p.published_at, a.name
ORDER BY p.published_at DESC
LIMIT 10;

-- Update with subquery
UPDATE posts
SET updated_at = CURRENT_TIMESTAMP
WHERE author_id IN (
    SELECT id FROM authors WHERE email LIKE '%@example.com'
);
```

## Configuration Formats

### YAML

```yaml
# Hugo configuration
baseURL: https://example.com/
languageCode: de-de
title: My Hugo Site
theme: minimal-personal

params:
  author: Hugo Demo
  description: A demonstration site
  colors:
    primary: "#386641"
    secondary: "#6a994e"
    accent: "#bc4749"

languages:
  de:
    languageName: Deutsch
    weight: 1
    params:
      title: Meine Hugo Seite
  en:
    languageName: English
    weight: 2
    params:
      title: My Hugo Site

menu:
  main:
    - identifier: home
      name: Home
      url: /
      weight: 1
    - identifier: posts
      name: Posts
      url: /posts/
      weight: 2
    - identifier: about
      name: About
      url: /about/
      weight: 3

taxonomies:
  tag: tags
  category: categories
  series: series
```

### TOML

```toml
# Hugo configuration in TOML
baseURL = "https://example.com/"
languageCode = "de-de"
title = "My Hugo Site"
theme = "minimal-personal"

[params]
author = "Hugo Demo"
description = "A demonstration site"

[params.colors]
primary = "#386641"
secondary = "#6a994e"
accent = "#bc4749"

[markup]
  [markup.highlight]
    style = "monokai"
    lineNos = true
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true

[[menu.main]]
identifier = "home"
name = "Home"
url = "/"
weight = 1

[[menu.main]]
identifier = "posts"
name = "Posts"
url = "/posts/"
weight = 2
```

### JSON

```json
{
  "name": "hugo-project",
  "version": "1.0.0",
  "description": "Hugo blog project",
  "scripts": {
    "dev": "hugo server -D",
    "build": "hugo --minify",
    "clean": "rm -rf public resources"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/user/repo.git"
  },
  "author": "Hugo Demo",
  "license": "MIT",
  "dependencies": {
    "bulma": "^1.0.0"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "postcss-cli": "^10.0.0"
  }
}
```

## Shell Scripts

### Bash

```bash
#!/bin/bash

# Hugo development server script
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Variables
HUGO_VERSION="0.152.2"
PORT="${PORT:-1313}"
BIND="${BIND:-127.0.0.1}"

# Check if Hugo is installed
if ! command -v hugo &> /dev/null; then
    echo -e "${RED}Error: Hugo is not installed${NC}"
    exit 1
fi

# Check Hugo version
INSTALLED_VERSION=$(hugo version | grep -oP 'v\K[0-9.]+')
if [[ "$INSTALLED_VERSION" != "$HUGO_VERSION" ]]; then
    echo -e "${YELLOW}Warning: Expected Hugo $HUGO_VERSION, found $INSTALLED_VERSION${NC}"
fi

# Clean build artifacts
echo -e "${GREEN}Cleaning build artifacts...${NC}"
rm -rf public resources/_gen

# Start development server
echo -e "${GREEN}Starting Hugo development server...${NC}"
echo -e "Server: http://${BIND}:${PORT}"

hugo server \
    --bind="$BIND" \
    --port="$PORT" \
    --buildDrafts \
    --buildFuture \
    --disableFastRender \
    --noHTTPCache

# Function to handle errors
handle_error() {
    echo -e "${RED}Error: $1${NC}"
    exit 1
}

trap 'handle_error "Server stopped unexpectedly"' ERR
```

## Highlighting Features

### Line Numbers

{{< highlight go "linenos=table" >}}
package main

import "fmt"

func main() {
    fmt.Println("Line numbers enabled!")
}
{{< /highlight >}}

### Highlight Specific Lines

{{< highlight python "linenos=table,hl_lines=3 5-7,linenostart=1" >}}
def calculate_sum(numbers):
    """Calculate sum of numbers."""
    total = 0  # This line is highlighted
    for num in numbers:
        total += num  # These lines
        if total > 100:  # are also
            break  # highlighted
    return total

result = calculate_sum([1, 2, 3, 4, 5])
print(f"Sum: {result}")
{{< /highlight >}}

## Inline Code Highlighting

You can highlight inline code: `const message = "Hello"`{.js} or `print("Hello")`{.python}

## Conclusion

Hugo's syntax highlighting with Chroma provides:

- ✅ Support for 200+ languages
- ✅ Multiple highlighting styles
- ✅ Line numbers and line highlighting
- ✅ Inline code highlighting
- ✅ Code fences and shortcodes
- ✅ Customizable themes

Perfect for technical blogs and documentation sites!

## Available Styles

Popular Chroma styles:
- monokai
- dracula
- github
- nord
- solarized-dark
- solarized-light
- vim
- vs
- xcode

Configure in `hugo.toml`:
```toml
[markup.highlight]
style = "monokai"
```
