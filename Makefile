all: lanterna.css print.css

.PHONY: lanterna.css
lanterna.css:
	docker run --rm -v $(PWD):/less -ti appleboy/node-less /less/media/css/lanterna.less > media/css/lanterna.css

.PHONY: print.css
print.css:
	docker run --rm -v $(PWD):/less -ti appleboy/node-less /less/media/css/print.less > media/css/print.css
