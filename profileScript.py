import sys
from tabnanny import check


def checkArgs(argv):
    if len(argv) != 3:
        print("Usage: .py numlines outfilename")
        quit()

def handleFile(argv):
    numlines = int(argv[1])
    w = open(argv[2], "w")

    for i in range(numlines):
        sqlInput = "INSERT INTO Experiences (accountId, sId) values("+str(i)+",1);\n"
        w.write(sqlInput)
    
    w.close()

def main():
    checkArgs(sys.argv)
    handleFile(sys.argv)

if __name__ == "__main__":
    main()