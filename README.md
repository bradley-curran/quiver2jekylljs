## Installing

    $ npm install -g quiver2jekyll

## Usage

    Usage: quiver2jekyll [options]

    Options:

      -h, --help             output usage information
      -V, --version          output the version number
      -f, --file <filename>  convert file
      -s, --save             save to the current directory

### Examples


    # Convert MyBlogPost.qvnote into a jekyll post and output to the console
    $ quiver2jekyll -f ~/Desktop/MyBlogPost.qvnote


    # Convert MyBlogPost.qvnote into a jekyll post and save the file according to the note's title
    $ quiver2jekyll -f ~/Desktop/MyBlogPost.qvnote -s

The note file will be of the format YYYY-MM-SS-the-note-title.markdown where the date is taken from the updated timestamp in `meta.json`. 

## Limitations

- `quiver2jekyll` only supports `markdown` and `code` cell types. 
