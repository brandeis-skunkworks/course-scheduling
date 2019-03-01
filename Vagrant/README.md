# Vagrant
To run this in your system:

Clone the repository to your system. You could do it by opening your command prompt and typing:

git clone https://github.com/brandeis-skunkworks/course-scheduling.git

Or you could clone from Github Desktop.
Then, in the command prompt, change directory (cd) into the new folder. It might look something like:

cd repo/Vagrant

And then run:

vagrant up

It's been set up to install apache2, MySQL and php.

Just open a command prompt in the directory that has the Vagrantfile and run "vagrant up"

You should be able to open the website at localhost:4567

test, via ssh or however, that you have MySQL and php installed. Although we can decide to use python, which comes preinstalled with ubuntu.

Remember that you need a few GBs of space

All I modified (that has an effect on installation) was the Vagrantfile and created the bootstrap.sh shell script as suggeested in one of the tutorials. All tutorials used are mentioned in a file inside the "Documents" directory
