class Player:
    def __init__(self, pname,match,catch,run):
        self.pname = pname
        self.match = match
        self.catch = catch
        self.run = run

    def display(self):
	    print(" PLAYES NAME -- ",self.pname)
	    print("MATCH -- ",self.match)
	    print("CATCH -- ",self.catch)
	    print("RUN -- ",self.run)
		
n1=input("enter  NAME = ")
m1 = input("match ")
c1= input("enter catch=")
r1 = input("enter the run = ")

obj= Player(n1,m1,c1,r1)

obj.display()

		



