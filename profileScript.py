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
        sqlInput = "INSERT INTO Profile (dateCreated, metadata, experienceID, profileType) values('2022-05-05','test metadata'," + str(i) + ",'Real')"
        sqlInput = sqlInput[:len(sqlInput) - 3]
        sqlInput += "');\n"
        w.write(sqlInput)
    
    w.close()

def main():
    checkArgs(sys.argv)
    handleFile(sys.argv)

if __name__ == "__main__":
    main()