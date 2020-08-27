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
		| xargs -0 sed -i 's/width={24} height={24}/viewBox="0 0 24 24" height="1em" width="1em" preserveAspectRatio="xMinYMin"/'
	find $(PWD)/$@ -type f -name "*.js" -print0 \
		| xargs -0 sed -i 's/{...props}/{...props} style={{fill: "currentColor", display: "inline-block", ...(props.style)}}/'
	find $(PWD)/$@ -type f -name "*.js" -print0 \
		| xargs -0 sed -i 's/#000000/currentColor/'
	find $(PWD)/$@ -type f -name "*.js" -print0 \
		| xargs -0 sed -i 's/#000/currentColor/'
	npx create-index -r $(PWD)$@

.PHONY: dist/%
dist/%: stage1/%
	npx babel $(PWD)/stage1/$(@F) -d $(PWD)$@

.PHONY: main
main: dist/Icon
	cp $(PWD)/package.json $(PWD)/dist

.PHONY: publish
publish: dist/Icon
	npm version minor --no-git-tag-version
	cp $(PWD)/package.json $(PWD)/dist
	cd $(PWD)/dist && npm publish --access public && cd $(PWD)

.PHONY: yalc
yalc: dist/Icon
	cp $(PWD)/package.json $(PWD)/dist
	cd $(PWD)/dist && yalc publish --access public && cd $(PWD)
