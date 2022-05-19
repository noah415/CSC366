from asyncore import read
import readline
import sys
from tabnanny import check


def checkArgs(argv):
    if len(argv) != 4:
        print("Usage: .py tablename csvfile outfilename")
        quit()

def handleFile(argv):
    f = open(argv[2], "r")
    w = open(argv[3], "w")
    values = []
    currentProfileId = 1

    line = f.readline()
    line = line.split(',')
    for vC in line:
        values.append(vC)
    values[-1] = values[-1][:len(values[-1]) - 1]
    
    line = f.readline()
    while (line):
        line = line.split(',')
        sqlInput = "---Profile: "+ str(currentProfileId) + " Real Values---\n"
        w.write(sqlInput)
        for i in range(1, len(line)):
            sqlInput = "INSERT INTO "+argv[1]+" ('"+values[i]+"',"+str(currentProfileId)+","+line[i]+");\n"  
            w.write(sqlInput)      
        currentProfileId += 1
        line = f.readline()
    
    w.close()
    f.close()

def main():
    checkArgs(sys.argv)
    handleFile(sys.argv)

if __name__ == "__main__":
    main()