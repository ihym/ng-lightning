# `<ngl-avatar>`

### Input
  * `src`: Image url.
  * `size?: 'x-small' | 'small' | 'medium' | 'large' = 'medium'`: Image size.
  * `variant?: 'square' | 'circle' = 'square'`: Image shape.
  * `alternativeText?`: Assistive text.
  * `initials?`: If an image is unavailable, this text will be shown instead.
  * `fallbackIconName?`: The initials fallback relies on this for its background color. Names are written in the format 'standard:account' where 'standard' is the category, and 'account' is the specific icon to be displayed.

### Output

  * `error: EventEmitter`: When image fails to load. In this case initials will be displayed, if set.

