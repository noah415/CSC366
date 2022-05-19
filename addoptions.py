import sys

def main():
  file = open('Insert-Statements/AnswerOptions-insert.sql', 'a')
  UREsId = 1
  ProsId = 2

  for i in range(12, 95, 1):
    file.write('INSERT INTO AnswerOptions values(' + str(UREsId) + ',' + str(i) + ',1,\' strongly disagree \');\n' +
               'INSERT INTO AnswerOptions values(' + str(UREsId) + ',' + str(i) + ',2,\' disagree\');\n' +
               'INSERT INTO AnswerOptions values(' + str(UREsId) + ',' + str(i) + ',3,\' somewhat disagree\');\n' +
               'INSERT INTO AnswerOptions values(' + str(UREsId) + ',' + str(i) + ',4,\' neither agree nor disagree \');\n' +
               'INSERT INTO AnswerOptions values(' + str(UREsId) + ',' + str(i) + ',5,\' somewhat agree \');\n' +
               'INSERT INTO AnswerOptions values(' + str(UREsId) + ',' + str(i) + ',6,\'agree\');\n' +
               'INSERT INTO AnswerOptions values(' + str(UREsId) + ',' + str(i) + ',7,\'strongly agree\');\n' +
               'INSERT INTO AnswerOptions values(' + str(UREsId) + ',' + str(i) + ',0,\'Prefer not to answer\');\n')

  for i in range(7, 90, 1):
    file.write('INSERT INTO AnswerOptions values(' + str(ProsId) + ',' + str(i) + ',1,\' strongly disagree \');\n' +
               'INSERT INTO AnswerOptions values(' + str(ProsId) + ',' + str(i) + ',2,\' disagree\');\n' +
               'INSERT INTO AnswerOptions values(' + str(ProsId) + ',' + str(i) + ',3,\' somewhat disagree\');\n' +
               'INSERT INTO AnswerOptions values(' + str(ProsId) + ',' + str(i) + ',4,\' neither agree nor disagree \');\n' +
               'INSERT INTO AnswerOptions values(' + str(ProsId) + ',' + str(i) + ',5,\' somewhat agree \');\n' +
               'INSERT INTO AnswerOptions values(' + str(ProsId) + ',' + str(i) + ',6,\'agree\');\n' +
               'INSERT INTO AnswerOptions values(' + str(ProsId) + ',' + str(i) + ',7,\'strongly agree\');\n' +
               'INSERT INTO AnswerOptions values(' + str(ProsId) + ',' + str(i) + ',0,\'Prefer not to answer\');\n')

if __name__=='__main__':
  main()