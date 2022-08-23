build:
	npm run frontend:build
	npm run build
	docker build . -t dev2alert/clock-app
push:
	docker push dev2alert/clock-app
pull:
	docker pull dev2alert/clock-app
run:
	docker-compose up
stop:
	docker-compose stop