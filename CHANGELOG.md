# [2.3.0](https://github.com/sozialhelden/core/compare/v2.2.3...v2.3.0) (2025-10-14)


### Features

* add getTranslations utility ([c320be8](https://github.com/sozialhelden/core/commit/c320be826a95eabd7a9f45f68fe06c7c111d8550))

## [2.2.3](https://github.com/sozialhelden/core/compare/v2.2.2...v2.2.3) (2025-08-28)


### Bug Fixes

* add support for react 19.1 ([b9b6f61](https://github.com/sozialhelden/core/commit/b9b6f61263cd5ba55844ea3a634a865e53a0b65d))

## [2.2.2](https://github.com/sozialhelden/core/compare/v2.2.1...v2.2.2) (2025-08-28)


### Bug Fixes

* don't pin peer deps ([ccad3bd](https://github.com/sozialhelden/core/commit/ccad3bd564887e8a55c1c644528e7c284fd120b5))

## [2.2.1](https://github.com/sozialhelden/core/compare/v2.2.0...v2.2.1) (2025-07-29)


### Bug Fixes

* **deps:** pin dependencies ([0624198](https://github.com/sozialhelden/core/commit/0624198a038a1f6aac8c0836f148270fed8c301a))

# [2.2.0](https://github.com/sozialhelden/core/compare/v2.1.1...v2.2.0) (2025-07-29)


### Features

* add language tags / locale utilities ([34bdd6c](https://github.com/sozialhelden/core/commit/34bdd6c45b840d2662e3dedf5149ee77b758d702))

## [2.1.1](https://github.com/sozialhelden/core/compare/v2.1.0...v2.1.1) (2025-06-11)


### Bug Fixes

* entrypoints ([324ca58](https://github.com/sozialhelden/core/commit/324ca58dab5dd1687a01d9e4fcf49e9404d874e7))

# [2.1.0](https://github.com/sozialhelden/core/compare/v2.0.0...v2.1.0) (2025-06-10)


### Bug Fixes

* multi level hierarchy in categories ([1a20bee](https://github.com/sozialhelden/core/commit/1a20bee68d112d53e0b211ffaed3ebd59591b7ae))


### Features

* take selector specificity into account when selecting a category ([3abd59e](https://github.com/sozialhelden/core/commit/3abd59ee3bef46324e6e66b6cd78f94308ab3f91))

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
