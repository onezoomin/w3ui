# Changelog

## [6.0.0](https://github.com/web3-storage/w3ui/compare/uploader-core-v5.2.0...uploader-core-v6.0.0) (2023-07-25)


### ⚠ BREAKING CHANGES

* upgrade access client, ucanto and other packages ([#530](https://github.com/web3-storage/w3ui/issues/530))

### Features

* upgrade access client, ucanto and other packages ([#530](https://github.com/web3-storage/w3ui/issues/530)) ([8e7321b](https://github.com/web3-storage/w3ui/commit/8e7321be61bded29ac8b29c781dabf665865ec97))

## [5.2.0](https://github.com/web3-storage/w3ui/compare/uploader-core-v5.1.0...uploader-core-v5.2.0) (2023-05-19)


### Features

* implement `uploadCAR` in uploader ([#517](https://github.com/web3-storage/w3ui/issues/517)) ([40036ea](https://github.com/web3-storage/w3ui/commit/40036ea391fa47c26ab35fb29511d9b3a1305aaf))

## [5.1.0](https://github.com/web3-storage/w3ui/compare/uploader-core-v5.0.0...uploader-core-v5.1.0) (2023-05-09)


### Features

* update to latest version of ucanto and [@web3-storage](https://github.com/web3-storage) libraries ([#514](https://github.com/web3-storage/w3ui/issues/514)) ([e1ee301](https://github.com/web3-storage/w3ui/commit/e1ee301f8a6571a074c46add79527e2480f82675))
* upload progress ([#499](https://github.com/web3-storage/w3ui/issues/499)) ([6c9de97](https://github.com/web3-storage/w3ui/commit/6c9de9799ff25e16ed5b5ce4f1b66bd9430466f8))
* w3console cleanup and updates to packages to support it ([#507](https://github.com/web3-storage/w3ui/issues/507)) ([78aee2a](https://github.com/web3-storage/w3ui/commit/78aee2a63f3f56dedc493b0fe8e60aa94ad84f07))

## [5.0.0](https://github.com/web3-storage/w3ui/compare/uploader-core-v4.1.0...uploader-core-v5.0.0) (2023-03-23)


### ⚠ BREAKING CHANGES

* use new account model ([#400](https://github.com/web3-storage/w3ui/issues/400))

### Features

* use new account model ([#400](https://github.com/web3-storage/w3ui/issues/400)) ([66dd20b](https://github.com/web3-storage/w3ui/commit/66dd20b3a95fc496da1aeb40342c8f691d147c7e))

## [4.1.0](https://github.com/web3-storage/w3ui/compare/uploader-core-v4.0.0...uploader-core-v4.1.0) (2023-02-23)


### Features

* implement reverse paging ([#381](https://github.com/web3-storage/w3ui/issues/381)) ([10f059a](https://github.com/web3-storage/w3ui/commit/10f059af4dbf5cb6303d82c1133defe8f74aa914))

## [4.0.0](https://github.com/web3-storage/w3ui/compare/uploader-core-v3.0.2...uploader-core-v4.0.0) (2023-02-16)


### ⚠ BREAKING CHANGES

* core and framework components have changed considerably. Please read the updated doucmentation.
* The uploader-core API has been augmented with a new method to support chunked CAR uploads `uploadCarChunks`. The static `encode*` functions are now exported directly from the `*-uploader` modules instead of being injected by the provider and have different signatures to allow for streaming DAG generation. The `uploadCar` method of the provider has been replaced with the more friendly `uploadFile` and `uploadDirectory` functions (and `uploadCarChunks` to allow for direct CAR uploads).

### Features

* add CAR splitting ([#66](https://github.com/web3-storage/w3ui/issues/66)) ([1c57dba](https://github.com/web3-storage/w3ui/commit/1c57dba9ef51845927432acd3836d4c576eb39fe))
* add global test framework and tests ([c806db3](https://github.com/web3-storage/w3ui/commit/c806db31b9432ec1303e47ddaf0187ffd220ccd0))
* add README for packages ([6d1690b](https://github.com/web3-storage/w3ui/commit/6d1690b3ba557a95c4203f6f22fe5c6700626766)), closes [#26](https://github.com/web3-storage/w3ui/issues/26)
* base for uploader core doc ([7a19b77](https://github.com/web3-storage/w3ui/commit/7a19b77e2d2fbc599ad2cb3aa4e3e9ec800514a0))
* consume access and upload client ([#159](https://github.com/web3-storage/w3ui/issues/159)) ([e36d842](https://github.com/web3-storage/w3ui/commit/e36d842b1695032355ab29646c3dce6a33880517))
* multi file upload ([4f9a5ce](https://github.com/web3-storage/w3ui/commit/4f9a5ced2d3819dd5d3eb05c0a273230ff003de2))


### Bug Fixes

* add license to published packages ([957178d](https://github.com/web3-storage/w3ui/commit/957178d72cb0051c2f798793a314acd23b8f3beb))
* configure to use raw-leaves ([e875ddb](https://github.com/web3-storage/w3ui/commit/e875ddb6da931cf595e055b3049afd7f2e6f9622))
* file upload example ([796d607](https://github.com/web3-storage/w3ui/commit/796d6076bd0781c23ccaafd3d259830950f43959))
* linting ([14461ac](https://github.com/web3-storage/w3ui/commit/14461acf82ec05b7a856dee37f62026c07ba0d9f))
* lockfile ([09120cb](https://github.com/web3-storage/w3ui/commit/09120cb93d550fc8e1f7df39cb7585fefc3f4dca))
* missing files ([1b2691d](https://github.com/web3-storage/w3ui/commit/1b2691d604a5b2fba4ac08b357a64cb48beecbad))
* resolve call fetch on window object ([777df5d](https://github.com/web3-storage/w3ui/commit/777df5dbbd3aaa890a095c7eb39d74633505690e))
* simplify encoder ([88b169c](https://github.com/web3-storage/w3ui/commit/88b169cd58393e53235c75d60a1d0c116d3d21e0))
* uploads listing ([#104](https://github.com/web3-storage/w3ui/issues/104)) ([dc2139f](https://github.com/web3-storage/w3ui/commit/dc2139f5e00c9195c480ce5c98a78b4296713ac7))

## [3.0.1](https://github.com/web3-storage/w3ui/compare/uploader-core-v3.0.0...uploader-core-v3.0.1) (2022-12-15)


### Bug Fixes

* lockfile ([09120cb](https://github.com/web3-storage/w3ui/commit/09120cb93d550fc8e1f7df39cb7585fefc3f4dca))

## [3.0.0](https://github.com/web3-storage/w3ui/compare/uploader-core-v2.0.2...uploader-core-v3.0.0) (2022-12-15)


### ⚠ BREAKING CHANGES

* core and framework components have changed considerably. Please read the updated doucmentation.

### Features

* consume access and upload client ([#159](https://github.com/web3-storage/w3ui/issues/159)) ([e36d842](https://github.com/web3-storage/w3ui/commit/e36d842b1695032355ab29646c3dce6a33880517))

## [2.0.2](https://github.com/web3-storage/w3ui/compare/uploader-core-v2.0.1...uploader-core-v2.0.2) (2022-10-27)


### Bug Fixes

* uploads listing ([#104](https://github.com/web3-storage/w3ui/issues/104)) ([dc2139f](https://github.com/web3-storage/w3ui/commit/dc2139f5e00c9195c480ce5c98a78b4296713ac7))

## [2.0.1](https://github.com/web3-storage/w3ui/compare/uploader-core-v2.0.0...uploader-core-v2.0.1) (2022-10-18)


### Bug Fixes

* configure to use raw-leaves ([e875ddb](https://github.com/web3-storage/w3ui/commit/e875ddb6da931cf595e055b3049afd7f2e6f9622))

## [2.0.0](https://github.com/web3-storage/w3ui/compare/uploader-core-v1.1.1...uploader-core-v2.0.0) (2022-10-01)


### ⚠ BREAKING CHANGES

* The uploader-core API has been augmented with a new method to support chunked CAR uploads `uploadCarChunks`. The static `encode*` functions are now exported directly from the `*-uploader` modules instead of being injected by the provider and have different signatures to allow for streaming DAG generation. The `uploadCar` method of the provider has been replaced with the more friendly `uploadFile` and `uploadDirectory` functions (and `uploadCarChunks` to allow for direct CAR uploads).

### Features

* add CAR splitting ([#66](https://github.com/web3-storage/w3ui/issues/66)) ([1c57dba](https://github.com/web3-storage/w3ui/commit/1c57dba9ef51845927432acd3836d4c576eb39fe))

## [1.1.1](https://github.com/web3-storage/w3ui/compare/uploader-core-v1.1.0...uploader-core-v1.1.1) (2022-09-21)


### Bug Fixes

* resolve call fetch on window object ([777df5d](https://github.com/web3-storage/w3ui/commit/777df5dbbd3aaa890a095c7eb39d74633505690e))

## [1.1.0](https://github.com/web3-storage/w3ui/compare/uploader-core-v1.0.1...uploader-core-v1.1.0) (2022-09-20)


### Features

* add README for packages ([6d1690b](https://github.com/web3-storage/w3ui/commit/6d1690b3ba557a95c4203f6f22fe5c6700626766)), closes [#26](https://github.com/web3-storage/w3ui/issues/26)
* base for uploader core doc ([7a19b77](https://github.com/web3-storage/w3ui/commit/7a19b77e2d2fbc599ad2cb3aa4e3e9ec800514a0))

## [1.0.1](https://github.com/web3-storage/w3ui/compare/uploader-core-v1.0.0...uploader-core-v1.0.1) (2022-09-19)


### Bug Fixes

* add license to published packages ([957178d](https://github.com/web3-storage/w3ui/commit/957178d72cb0051c2f798793a314acd23b8f3beb))

## 1.0.0 (2022-09-19)


### Features

* add global test framework and tests ([c806db3](https://github.com/web3-storage/w3ui/commit/c806db31b9432ec1303e47ddaf0187ffd220ccd0))
* multi file upload ([4f9a5ce](https://github.com/web3-storage/w3ui/commit/4f9a5ced2d3819dd5d3eb05c0a273230ff003de2))


### Bug Fixes

* file upload example ([796d607](https://github.com/web3-storage/w3ui/commit/796d6076bd0781c23ccaafd3d259830950f43959))
* linting ([14461ac](https://github.com/web3-storage/w3ui/commit/14461acf82ec05b7a856dee37f62026c07ba0d9f))
* missing files ([1b2691d](https://github.com/web3-storage/w3ui/commit/1b2691d604a5b2fba4ac08b357a64cb48beecbad))
* simplify encoder ([88b169c](https://github.com/web3-storage/w3ui/commit/88b169cd58393e53235c75d60a1d0c116d3d21e0))
