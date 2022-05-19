import sys
from tabnanny import check


def checkArgs(argv):
    if len(argv) != 4:
        print("Usage: .py tablename infilename outfilename")
        quit()

def handleFile(argv):
    tablename = argv[1]
    f = open(argv[2])
    w = open(argv[3], "w")

    line = f.readline()

    while(line):
        line = line.split(",")
        sqlInput = "INSERT INTO " + tablename + " values("
        for i in line:
            if i.isnumeric():
                sqlInput += i + ","
            else:
                sqlInput += "'" + i + "'" + ","
        sqlInput = sqlInput[:len(sqlInput) - 3]
        sqlInput += "');\n"
        w.write(sqlInput)
        line = f.readline()
    
    w.close()
    f.close()



def main():
    checkArgs(sys.argv)
    handleFile(sys.argv)

if __name__ == "__main__":
    main()
