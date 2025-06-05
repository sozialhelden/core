# [2.0.0](https://github.com/sozialhelden/core/compare/v1.1.0...v2.0.0) (2025-06-05)


* refactor!: split synonyms into osm selectors and generic synonyms ([f15969c](https://github.com/sozialhelden/core/commit/f15969cebe76700f77f3c4edd69e92c57b09484c))


### BREAKING CHANGES

* `synonyms` no longer contain OSM tag value pairs. If
you are using OSM data, make sure to use the newly added
`findCategoryByOSMTags` or `generateCategoryByOSMTagsSQLStatement`
functions instead.

# [1.1.0](https://github.com/sozialhelden/core/compare/v1.0.0...v1.1.0) (2025-06-04)


### Bug Fixes

* merge all type declarations into a single file ([2c14461](https://github.com/sozialhelden/core/commit/2c144614094a7510ce9fc125eda67239caab8289))


### Features

* add categories ([6f71929](https://github.com/sozialhelden/core/commit/6f7192918184013ded335839f3fe80e4f64d284e))
* add getChildCategories ([5a4f46a](https://github.com/sozialhelden/core/commit/5a4f46ad5fb8a2072b4dddee75c696b59c44d7f5))
