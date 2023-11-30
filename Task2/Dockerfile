FROM node


#This tells that all the subsequent commands will be executed from inside this folder.
WORKDIR /app

#With this copy the package.json into the app, then run npm install. With this optimization we prevent to run over and over again whenever we have 
#changes to our code and we need to rebuild the image.
COPY package.json /app


#All those commands will be executed in the working directory of our docker container and image.
RUN npm install


#We specify two paths here, the first path is the path outside of the container 
#out of the image where the files sholud be copied into the image
#The first dot tells docker that is the ile of the project where the Dockerfile is located
#Basically the first dot tells docker that all the files should be opened
#The second dot is the path inside of the image, where those files should be stored.
#So basically the whole command means that all the files from the folder will be copied into an app folder inside of the container.
#It will be created in the image and container if its doesnt already exists.
COPY . /app 
# we can put ./ because we declared in the previous commanda that the working directory is /app


#We want to declare and expose one specific port
EXPOSE 80


#This command will run when a container is started
CMD [ "node", "server.js"]