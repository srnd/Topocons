.DEFAULT_GOAL=main
PWD := $(dir $(abspath $(firstword $(MAKEFILE_LIST))))

.PHONY: clean/%
clean/%:
	rm -rf $(PWD)/dist/$(@F)
	rm -rf $(PWD)/stage1/$(@F)
	mkdir -p $(PWD)/dist/$(@F)
	mkdir -p $(PWD)/stage1/$(@F)

.PHONY: checkout
checkout:
	git submodule update --recursive --remote

.PHONY: stage1/%
stage1/%: clean/% checkout
	npx svgr $(PWD)/src/$(@F) -d $(PWD)$@
	find $(PWD)/$@ -type f -name "*.js" -print0 \
		| xargs -0 sed -i 's/width={24} height={24}/viewBox="0 0 24 24" height="1em" width="1em" preserveAspectRatio="xMinYMin" style={{fill: "currentColor", display: "inline-block"}}/'
	find $(PWD)/$@ -type f -name "*.js" -print0 \
		| xargs -0 sed -i 's/width={64} height={64}/viewBox="0 0 64 64" height="1em" width="1em" preserveAspectRatio="xMinYMin" style={{display: "inline-block"}}/'
	npx create-index -r $(PWD)$@

.PHONY: dist/%
dist/%: stage1/%
	npx babel $(PWD)/stage1/$(@F) -d $(PWD)$@

.PHONY: main
main: dist/Icon dist/Emoji
	cp $(PWD)/package.json $(PWD)/dist

.PHONY: publish
publish: dist/Icon dist/Emoji
	npm version minor --no-git-tag-version
	cp $(PWD)/package.json $(PWD)/dist
	cd $(PWD)/dist && npm publish --access public && cd $(PWD)
