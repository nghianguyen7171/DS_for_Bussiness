// Quiz data
const quizData = {
  "questions": [
    {
      "id": 1,
      "category": "MultiIndex",
      "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})\ndf_indexed = df.set_index(['A', 'B'])\nprint(df_indexed.index)",
      "question": "Kết quả của đoạn code trên là gì?",
      "options": [
        "MultiIndex([(1, 4), (2, 5), (3, 6)])",
        "Index([1, 2, 3])",
        "Index([4, 5, 6])",
        "Error"
      ],
      "correct": 0,
      "hint": "set_index(['A', 'B']) tạo MultiIndex từ 2 cột A và B",
      "explanation": "set_index(['A', 'B']) tạo MultiIndex từ 2 cột A và B. Kết quả là MultiIndex với các tuple (1,4), (2,5), (3,6) tương ứng với giá trị của cột A và B."
    },
    {
      "id": 2,
      "category": "MultiIndex",
      "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 1, 2], 'B': [4, 5, 6], 'C': [7, 8, 9]})\ndf_indexed = df.set_index(['A', 'B'])\nprint(df_indexed.loc[1])",
      "question": "Kết quả của df_indexed.loc[1] là gì?",
      "options": [
        "DataFrame với 2 hàng",
        "Series với 1 giá trị",
        "DataFrame với 1 hàng",
        "Error"
      ],
      "correct": 0,
      "hint": "loc[1] lấy tất cả hàng có A=1, có 2 hàng thỏa mãn",
      "explanation": "loc[1] lấy tất cả hàng có giá trị cấp đầu tiên (A) = 1. Trong DataFrame có 2 hàng với A=1: (1,4) và (1,5), nên kết quả là DataFrame với 2 hàng."
    },
    {
      "id": 3,
      "category": "MultiIndex",
      "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 1, 2], 'B': [4, 5, 6], 'C': [7, 8, 9]})\ndf_indexed = df.set_index(['A', 'B'])\nprint(df_indexed.loc[(1, 4)])",
      "question": "Kết quả của df_indexed.loc[(1, 4)] là gì?",
      "options": [
        "Series với C=7",
        "DataFrame với 1 hàng",
        "ValueError",
        "KeyError"
      ],
      "correct": 0,
      "hint": "loc[(1, 4)] lấy hàng có A=1 và B=4, trả về Series",
      "explanation": "loc[(1, 4)] lấy hàng có giá trị cấp đầu tiên (A) = 1 và cấp thứ hai (B) = 4. Hàng này có C=7, nên kết quả là Series với giá trị C=7."
    },
    {
      "id": 4,
      "category": "MultiIndex",
      "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 1, 2], 'B': [4, 5, 6], 'C': [7, 8, 9]})\ndf_indexed = df.set_index(['A', 'B'])\nprint(df_indexed.loc[1, 'C'])",
      "question": "Kết quả của df_indexed.loc[1, 'C'] là gì?",
      "options": [
        "Series với 2 giá trị",
        "DataFrame với 2 hàng",
        "Single value",
        "Error"
      ],
      "correct": 0,
      "hint": "loc[1, 'C'] lấy cột C của tất cả hàng có A=1",
      "explanation": "loc[1, 'C'] lấy cột C của tất cả hàng có A=1. Có 2 hàng với A=1, nên kết quả là Series với 2 giá trị từ cột C."
    },
    {
      "id": 5,
      "category": "MultiIndex",
      "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 1, 2], 'B': [4, 5, 6], 'C': [7, 8, 9]})\ndf_indexed = df.set_index(['A', 'B'])\nprint(df_indexed.sort_index(level=0))",
      "question": "sort_index(level=0) sắp xếp theo cấp nào?",
      "options": [
        "Cấp đầu tiên (A)",
        "Cấp thứ hai (B)",
        "Cả hai cấp",
        "Không sắp xếp"
      ],
      "correct": 0,
      "hint": "level=0 sắp xếp theo cấp đầu tiên của MultiIndex",
      "explanation": "level=0 chỉ định sắp xếp theo cấp đầu tiên của MultiIndex (cột A). Các hàng sẽ được sắp xếp theo giá trị của cột A trước, sau đó giữ nguyên thứ tự của cấp thứ hai."
    },
    {
      "id": 6,
      "category": "Data Merging",
      "code": "import pandas as pd\ndf1 = pd.DataFrame({'key': [1, 2, 3], 'A': [4, 5, 6]})\ndf2 = pd.DataFrame({'key': [2, 3, 4], 'B': [7, 8, 9]})\nresult = pd.merge(df1, df2, on='key')\nprint(len(result))",
      "question": "Số hàng trong kết quả merge với inner join là?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 1,
      "hint": "Inner join chỉ giữ các hàng có key chung: key=2 và key=3",
      "explanation": "Inner join (mặc định) chỉ giữ các hàng có giá trị key chung trong cả 2 DataFrame. df1 có key=[1,2,3], df2 có key=[2,3,4]. Các key chung là 2 và 3, nên kết quả có 2 hàng."
    },
    {
      "id": 7,
      "category": "Data Merging",
      "code": "import pandas as pd\ndf1 = pd.DataFrame({'key': [1, 2, 3], 'A': [4, 5, 6]})\ndf2 = pd.DataFrame({'key': [2, 3, 4], 'B': [7, 8, 9]})\nresult = pd.merge(df1, df2, on='key', how='left')\nprint(len(result))",
      "question": "Số hàng trong kết quả merge với left join là?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 1,
      "hint": "Left join giữ tất cả hàng từ df1 (3 hàng), điền NaN cho hàng không match",
      "explanation": "Left join giữ tất cả hàng từ DataFrame bên trái (df1). df1 có 3 hàng với key=[1,2,3]. Hàng key=1 không có trong df2 nên sẽ có NaN cho cột B, nhưng vẫn được giữ lại. Kết quả có 3 hàng."
    },
    {
      "id": 8,
      "category": "Data Merging",
      "code": "import pandas as pd\ndf1 = pd.DataFrame({'key': [1, 2, 3], 'A': [4, 5, 6]})\ndf2 = pd.DataFrame({'key': [2, 3, 4], 'B': [7, 8, 9]})\nresult = pd.merge(df1, df2, on='key', how='outer')\nprint(len(result))",
      "question": "Số hàng trong kết quả merge với outer join là?",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "correct": 1,
      "hint": "Outer join giữ tất cả hàng từ cả 2 DataFrame: 1,2,3,4 → 4 hàng",
      "explanation": "Outer join giữ tất cả hàng từ cả 2 DataFrame. df1 có key=[1,2,3], df2 có key=[2,3,4]. Tất cả các key duy nhất là [1,2,3,4], nên kết quả có 4 hàng. Hàng key=1 sẽ có NaN cho cột B, hàng key=4 sẽ có NaN cho cột A."
    },
    {
      "id": 9,
      "category": "Data Merging",
      "code": "import pandas as pd\ndf1 = pd.DataFrame({'key1': [1, 2], 'key2': [3, 4], 'A': [5, 6]})\ndf2 = pd.DataFrame({'key1': [1, 2], 'key2': [3, 5], 'B': [7, 8]})\nresult = pd.merge(df1, df2, on=['key1', 'key2'])\nprint(len(result))",
      "question": "Số hàng trong kết quả merge với 2 keys là?",
      "options": [
        "0",
        "1",
        "2",
        "3"
      ],
      "correct": 1,
      "hint": "Chỉ có hàng (key1=1, key2=3) có trong cả 2 DataFrame",
      "explanation": "Merge với 2 keys yêu cầu cả key1 và key2 phải khớp. df1 có (1,3), (2,4). df2 có (1,3), (2,5). Chỉ có hàng (key1=1, key2=3) có trong cả 2 DataFrame, nên kết quả có 1 hàng."
    },
    {
      "id": 10,
      "category": "Data Merging",
      "code": "import pandas as pd\ndf1 = pd.DataFrame({'key': [1, 2, 2], 'A': [4, 5, 6]})\ndf2 = pd.DataFrame({'key': [2, 2, 3], 'B': [7, 8, 9]})\nresult = pd.merge(df1, df2, on='key')\nprint(len(result))",
      "question": "Số hàng trong kết quả merge many-to-many là?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 2,
      "hint": "Many-to-many: df1 có 2 hàng key=2, df2 có 2 hàng key=2 → 2×2=4 hàng",
      "explanation": "Many-to-many merge: df1 có 2 hàng với key=2, df2 có 2 hàng với key=2. Khi merge, mỗi hàng từ df1 sẽ được kết hợp với mỗi hàng từ df2 có cùng key. Kết quả: 2×2=4 hàng."
    },
    {
      "id": 11,
      "category": "Concatenation",
      "code": "import pandas as pd\ndf1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\ndf2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})\nresult = pd.concat([df1, df2])\nprint(len(result))",
      "question": "Số hàng trong kết quả concat theo axis=0 là?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 2,
      "hint": "concat([df1, df2]) nối theo hàng: 2+2=4 hàng",
      "explanation": "concat([df1, df2]) với axis=0 (mặc định) nối các DataFrame theo hàng. df1 có 2 hàng, df2 có 2 hàng. Kết quả có 2+2=4 hàng."
    },
    {
      "id": 12,
      "category": "Concatenation",
      "code": "import pandas as pd\ndf1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\ndf2 = pd.DataFrame({'C': [5, 6], 'D': [7, 8]})\nresult = pd.concat([df1, df2], axis=1)\nprint(result.shape)",
      "question": "Kích thước của kết quả concat theo axis=1 là?",
      "options": [
        "(2, 2)",
        "(2, 4)",
        "(4, 2)",
        "(4, 4)"
      ],
      "correct": 1,
      "hint": "axis=1 nối theo cột: 2 cột + 2 cột = 4 cột, giữ nguyên 2 hàng",
      "explanation": "concat với axis=1 nối các DataFrame theo cột. df1 có 2 cột (A,B), df2 có 2 cột (C,D). Kết quả có 2+2=4 cột và giữ nguyên số hàng (2 hàng)."
    },
    {
      "id": 13,
      "category": "Concatenation",
      "code": "import pandas as pd\ndf1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\ndf2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})\nresult = pd.concat([df1, df2], ignore_index=True)\nprint(result.index.tolist())",
      "question": "Index của kết quả concat với ignore_index=True là?",
      "options": [
        "[0, 1, 2, 3]",
        "[0, 1, 0, 1]",
        "[1, 2, 3, 4]",
        "[0, 1, 2, 3, 4]"
      ],
      "correct": 0,
      "hint": "ignore_index=True tạo index mới từ 0 đến 3",
      "explanation": "ignore_index=True bỏ qua index gốc và tạo index mới liên tục từ 0. Kết quả có 4 hàng nên index sẽ là [0, 1, 2, 3]."
    },
    {
      "id": 14,
      "category": "Concatenation",
      "code": "import pandas as pd\ndf1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\ndf2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})\nresult = pd.concat([df1, df2], keys=['first', 'second'])\nprint(result.index.names)",
      "question": "Tên của các cấp index sau concat với keys là?",
      "options": [
        "[None, None]",
        "['first', 'second']",
        "[0, 1]",
        "['level_0', 'level_1']"
      ],
      "correct": 0,
      "hint": "keys tạo MultiIndex với tên mặc định là None",
      "explanation": "keys=['first', 'second'] tạo MultiIndex với cấp đầu tiên là 'first' và 'second', nhưng tên của các cấp index mặc định là None. Chỉ có giá trị của index được đặt tên."
    },
    {
      "id": 15,
      "category": "Data Reshaping",
      "code": "import pandas as pd\ndf = pd.DataFrame({'id': [1, 2], 'var1': [10, 20], 'var2': [30, 40]})\nresult = df.melt(id_vars=['id'])\nprint(len(result))",
      "question": "Số hàng trong kết quả melt là?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 2,
      "hint": "melt chuyển từ wide sang long: 2 hàng × 2 cột = 4 hàng",
      "explanation": "melt chuyển từ wide format sang long format. id_vars=['id'] giữ nguyên cột id. Các cột var1 và var2 được chuyển thành hàng. 2 hàng gốc × 2 cột = 4 hàng trong kết quả."
    },
    {
      "id": 16,
      "category": "Data Reshaping",
      "code": "import pandas as pd\ndf = pd.DataFrame({'id': [1, 2], 'var1': [10, 20], 'var2': [30, 40]})\nresult = df.melt(id_vars=['id'], value_vars=['var1'])\nprint(len(result))",
      "question": "Số hàng trong kết quả melt với value_vars=['var1'] là?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 1,
      "hint": "value_vars=['var1'] chỉ melt cột var1: 2 hàng × 1 cột = 2 hàng",
      "explanation": "value_vars=['var1'] chỉ định chỉ melt cột var1. id_vars=['id'] giữ nguyên cột id. Kết quả: 2 hàng gốc × 1 cột được melt = 2 hàng."
    },
    {
      "id": 17,
      "category": "Data Reshaping",
      "code": "import pandas as pd\ndf = pd.DataFrame({'id': [1, 2], 'variable': ['A', 'A'], 'value': [10, 20]})\nresult = df.pivot(index='id', columns='variable', values='value')\nprint(result.shape)",
      "question": "Kích thước của kết quả pivot là?",
      "options": [
        "(1, 1)",
        "(2, 1)",
        "(1, 2)",
        "(2, 2)"
      ],
      "correct": 1,
      "hint": "pivot tạo DataFrame với id làm index (2 giá trị) và variable làm columns (1 giá trị)",
      "explanation": "pivot sử dụng 'id' làm index (có 2 giá trị: 1, 2) và 'variable' làm columns (có 1 giá trị: 'A'). Kết quả có shape (2, 1): 2 hàng, 1 cột."
    },
    {
      "id": 18,
      "category": "Data Reshaping",
      "code": "import pandas as pd\ndf = pd.DataFrame({'id': [1, 1, 2, 2], 'variable': ['A', 'B', 'A', 'B'], 'value': [10, 20, 30, 40]})\nresult = df.pivot(index='id', columns='variable', values='value')\nprint(result.columns.tolist())",
      "question": "Tên các cột trong kết quả pivot là?",
      "options": [
        "['A', 'B']",
        "['id', 'variable', 'value']",
        "['variable']",
        "['value']"
      ],
      "correct": 0,
      "hint": "pivot sử dụng giá trị của cột 'variable' làm tên cột mới",
      "explanation": "pivot sử dụng giá trị của cột 'variable' làm tên cột mới. Cột 'variable' có giá trị ['A', 'B'], nên kết quả có 2 cột với tên 'A' và 'B'."
    },
    {
      "id": 19,
      "category": "Stack/Unstack",
      "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\ndf.index = ['X', 'Y']\nresult = df.stack()\nprint(len(result))",
      "question": "Số phần tử trong kết quả stack là?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 2,
      "hint": "stack chuyển columns thành index: 2 hàng × 2 cột = 4 phần tử",
      "explanation": "stack chuyển các cột thành cấp mới của MultiIndex. DataFrame có 2 hàng và 2 cột, nên stack sẽ tạo 2×2=4 phần tử trong Series kết quả."
    },
    {
      "id": 20,
      "category": "Stack/Unstack",
      "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\ndf.index = ['X', 'Y']\nresult = df.stack()\nprint(result.index.names)",
      "question": "Tên của các cấp index sau stack là?",
      "options": [
        "[None, None]",
        "['X', 'Y']",
        "['A', 'B']",
        "['level_0', 'level_1']"
      ],
      "correct": 0,
      "hint": "stack tạo MultiIndex với tên mặc định là None",
      "explanation": "stack tạo MultiIndex với cấp đầu tiên là index gốc (X, Y) và cấp thứ hai là tên cột (A, B). Tuy nhiên, tên của các cấp index mặc định là None."
    },
    {
      "id": 21,
      "category": "Stack/Unstack",
      "code": "import pandas as pd\ns = pd.Series([1, 2, 3, 4], index=pd.MultiIndex.from_tuples([('A', 'X'), ('A', 'Y'), ('B', 'X'), ('B', 'Y')]))\nresult = s.unstack()\nprint(result.shape)",
      "question": "Kích thước của kết quả unstack là?",
      "options": [
        "(2, 2)",
        "(4, 1)",
        "(1, 4)",
        "(2, 1)"
      ],
      "correct": 0,
      "hint": "unstack chuyển từ MultiIndex Series sang DataFrame: 2 cấp đầu × 2 cấp sau = 2×2",
      "explanation": "unstack chuyển MultiIndex Series thành DataFrame. Cấp đầu tiên (A, B) trở thành index với 2 giá trị. Cấp thứ hai (X, Y) trở thành columns với 2 giá trị. Kết quả có shape (2, 2)."
    },
    {
      "id": 22,
      "category": "MultiIndex",
      "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 1, 2], 'B': [4, 5, 6], 'C': [7, 8, 9]})\ndf_indexed = df.set_index(['A', 'B'])\nprint(df_indexed.groupby(level=0).sum())",
      "question": "groupby(level=0) nhóm theo cấp nào?",
      "options": [
        "Cấp đầu tiên (A)",
        "Cấp thứ hai (B)",
        "Cả hai cấp",
        "Không nhóm"
      ],
      "correct": 0,
      "hint": "level=0 nhóm theo cấp đầu tiên của MultiIndex",
      "explanation": "groupby(level=0) nhóm theo cấp đầu tiên của MultiIndex (cột A). Các hàng có cùng giá trị ở cấp đầu tiên sẽ được nhóm lại và tính tổng các cột số."
    },
    {
      "id": 23,
      "category": "Data Merging",
      "code": "import pandas as pd\ndf1 = pd.DataFrame({'key': [1, 2, 3], 'A': [4, 5, 6]})\ndf2 = pd.DataFrame({'key': [2, 3, 4], 'B': [7, 8, 9]})\nresult = pd.merge(df1, df2, on='key', suffixes=('_left', '_right'))\nprint(result.columns.tolist())",
      "question": "Tên các cột trong kết quả merge với suffixes là?",
      "options": [
        "['key', 'A', 'B']",
        "['key', 'A_left', 'B_right']",
        "['key_left', 'A', 'B']",
        "['key', 'A', 'B_left', 'B_right']"
      ],
      "correct": 0,
      "hint": "suffixes chỉ áp dụng khi có cột trùng tên (không có ở đây)",
      "explanation": "suffixes chỉ được áp dụng khi có cột trùng tên giữa 2 DataFrame. Trong trường hợp này, df1 có cột A, df2 có cột B - không có cột trùng tên nên suffixes không được áp dụng. Kết quả có cột ['key', 'A', 'B']."
    },
    {
      "id": 24,
      "category": "Data Merging",
      "code": "import pandas as pd\ndf1 = pd.DataFrame({'key': [1, 2, 3], 'A': [4, 5, 6]})\ndf2 = pd.DataFrame({'key': [2, 3, 4], 'A': [7, 8, 9]})\nresult = pd.merge(df1, df2, on='key', suffixes=('_left', '_right'))\nprint(result.columns.tolist())",
      "question": "Tên các cột trong kết quả merge với cột trùng tên là?",
      "options": [
        "['key', 'A', 'A']",
        "['key', 'A_left', 'A_right']",
        "['key', 'A_x', 'A_y']",
        "['key', 'A', 'A_left', 'A_right']"
      ],
      "correct": 1,
      "hint": "Khi có cột trùng tên, suffixes được áp dụng: A_left và A_right",
      "explanation": "Khi có cột trùng tên (cột A), suffixes được áp dụng để phân biệt. Cột A từ df1 trở thành A_left, cột A từ df2 trở thành A_right. Kết quả có cột ['key', 'A_left', 'A_right']."
    },
    {
      "id": 25,
      "category": "Concatenation",
      "code": "import pandas as pd\ndf1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\ndf2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})\nresult = pd.concat([df1, df2], verify_integrity=True)\nprint('Success')",
      "question": "Kết quả của concat với verify_integrity=True là?",
      "options": [
        "Success",
        "ValueError",
        "KeyError",
        "IndexError"
      ],
      "correct": 0,
      "hint": "verify_integrity=True kiểm tra index trùng lặp, ở đây không có nên thành công",
      "explanation": "verify_integrity=True kiểm tra xem có index trùng lặp không. Trong trường hợp này, df1 và df2 có index mặc định [0, 1] và [0, 1], nhưng pandas tự động xử lý bằng cách tạo MultiIndex, nên không có lỗi và in ra 'Success'."
    },
    {
      "id": 26,
      "category": "Data Reshaping",
      "code": "import pandas as pd\ndf = pd.DataFrame({'id': [1, 2], 'var1': [10, 20], 'var2': [30, 40]})\nresult = df.melt(id_vars=['id'], var_name='variable', value_name='value')\nprint(result.columns.tolist())",
      "question": "Tên các cột trong kết quả melt với var_name và value_name là?",
      "options": [
        "['id', 'variable', 'value']",
        "['id', 'var_name', 'value_name']",
        "['id', 'var1', 'var2']",
        "['id', 'variable', 'value', 'var1', 'var2']"
      ],
      "correct": 0,
      "hint": "var_name và value_name đặt tên cho cột variable và value",
      "explanation": "var_name='variable' đặt tên cho cột chứa tên các biến (var1, var2). value_name='value' đặt tên cho cột chứa giá trị. Kết quả có 3 cột: ['id', 'variable', 'value']."
    },
    {
      "id": 27,
      "category": "Stack/Unstack",
      "code": "import pandas as pd\ns = pd.Series([1, 2, 3, 4], index=pd.MultiIndex.from_tuples([('A', 'X'), ('A', 'Y'), ('B', 'X'), ('B', 'Y')]))\nresult = s.unstack(level=0)\nprint(result.index.tolist())",
      "question": "Index của kết quả unstack(level=0) là?",
      "options": [
        "['A', 'B']",
        "['X', 'Y']",
        "['level_0', 'level_1']",
        "['0', '1']"
      ],
      "correct": 1,
      "hint": "unstack(level=0) chuyển cấp đầu tiên thành columns, cấp thứ hai thành index",
      "explanation": "unstack(level=0) chuyển cấp đầu tiên (A, B) thành columns và cấp thứ hai (X, Y) thành index. Kết quả có index là ['X', 'Y'] và columns là ['A', 'B']."
    },
    {
      "id": 28,
      "category": "MultiIndex",
      "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 1, 2], 'B': [4, 5, 6], 'C': [7, 8, 9]})\ndf_indexed = df.set_index(['A', 'B'])\nresult = df_indexed.reset_index()\nprint(result.columns.tolist())",
      "question": "Tên các cột sau reset_index là?",
      "options": [
        "['A', 'B', 'C']",
        "['index', 'A', 'B', 'C']",
        "['level_0', 'level_1', 'C']",
        "['0', '1', 'C']"
      ],
      "correct": 0,
      "hint": "reset_index() chuyển MultiIndex thành cột thường",
      "explanation": "reset_index() chuyển MultiIndex thành các cột thường trong DataFrame. Cấp đầu tiên (A) và cấp thứ hai (B) trở thành cột A và B. Kết quả có cột ['A', 'B', 'C']."
    },
    {
      "id": 29,
      "category": "Data Merging",
      "code": "import pandas as pd\ndf1 = pd.DataFrame({'key': [1, 2, 3], 'A': [4, 5, 6]})\ndf2 = pd.DataFrame({'key': [2, 3, 4], 'B': [7, 8, 9]})\nresult = pd.merge(df1, df2, on='key', indicator=True)\nprint(result.columns.tolist())",
      "question": "Tên các cột trong kết quả merge với indicator=True là?",
      "options": [
        "['key', 'A', 'B']",
        "['key', 'A', 'B', '_merge']",
        "['key', 'A', 'B', 'indicator']",
        "['key', 'A', 'B', 'merge_info']"
      ],
      "correct": 1,
      "hint": "indicator=True thêm cột '_merge' để chỉ ra nguồn gốc của mỗi hàng",
      "explanation": "indicator=True thêm cột '_merge' vào kết quả để chỉ ra nguồn gốc của mỗi hàng: 'both' (có trong cả 2 DataFrame), 'left_only' (chỉ có trong df1), 'right_only' (chỉ có trong df2). Kết quả có cột ['key', 'A', 'B', '_merge']."
    },
    {
      "id": 30,
      "category": "Concatenation",
      "code": "import pandas as pd\ndf1 = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\ndf2 = pd.DataFrame({'A': [5, 6], 'B': [7, 8]})\nresult = pd.concat([df1, df2], join='inner')\nprint(result.shape)",
      "question": "Kích thước của kết quả concat với join='inner' là?",
      "options": [
        "(4, 2)",
        "(2, 2)",
        "(4, 4)",
        "(2, 4)"
      ],
      "correct": 0,
      "hint": "join='inner' chỉ giữ các cột chung, ở đây cả 2 DataFrame có cùng cột nên không thay đổi",
      "explanation": "join='inner' chỉ giữ các cột có trong tất cả DataFrame. Cả df1 và df2 đều có cột A và B, nên không có cột nào bị loại bỏ. Kết quả có 4 hàng (2+2) và 2 cột, shape (4, 2)."
    }
  ]
};

// Quiz application
class QuizApp {
    constructor() {
        this.questions = quizData.questions;
        this.currentQuestion = 0;
        this.totalQuestions = this.questions.length;
        this.userAnswers = new Array(this.totalQuestions).fill(null);
        this.showAnswer = false;
        
        this.init();
    }
    
    init() {
        this.showHomepage();
        this.bindEvents();
    }
    
    bindEvents() {
        // Start button
        document.getElementById('startBtn').addEventListener('click', () => {
            this.showQuiz();
        });
        
        // Restart button
        document.getElementById('restartBtn').addEventListener('click', () => {
            this.showHomepage();
        });
        
        // Option selection
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', (e) => {
                if (this.showAnswer) return;
                
                const optionIndex = parseInt(e.currentTarget.dataset.option);
                this.userAnswers[this.currentQuestion] = optionIndex;
                
                // Update UI
                document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                e.currentTarget.classList.add('selected');
                
                // Enable buttons
                document.getElementById('showAnswerBtn').disabled = false;
                document.getElementById('nextBtn').classList.remove('hidden');
            });
        });
        
        // Hint button
        document.getElementById('hintBtn').addEventListener('click', () => {
            this.showHint();
        });
        
        // Show answer button
        document.getElementById('showAnswerBtn').addEventListener('click', () => {
            this.showAnswer = !this.showAnswer;
            this.updateAnswerDisplay();
        });
        
        // Next button
        document.getElementById('nextBtn').addEventListener('click', () => {
            if (this.currentQuestion < this.totalQuestions - 1) {
                this.currentQuestion++;
                this.showAnswer = false;
                this.updateQuestion();
            } else {
                this.showEndPage();
            }
        });
    }
    
    showHomepage() {
        document.getElementById('homepage').classList.add('active');
        document.getElementById('quizpage').classList.remove('active');
        document.getElementById('endpage').classList.remove('active');
        
        // Reset quiz state
        this.currentQuestion = 0;
        this.userAnswers = new Array(this.totalQuestions).fill(null);
        this.showAnswer = false;
    }
    
    showQuiz() {
        document.getElementById('homepage').classList.remove('active');
        document.getElementById('quizpage').classList.add('active');
        document.getElementById('endpage').classList.remove('active');
        
        this.updateQuestion();
    }
    
    showEndPage() {
        document.getElementById('homepage').classList.remove('active');
        document.getElementById('quizpage').classList.remove('active');
        document.getElementById('endpage').classList.add('active');
    }
    
    updateQuestion() {
        const question = this.questions[this.currentQuestion];
        
        // Update progress
        document.getElementById('progressFill').style.width = 
            `${((this.currentQuestion + 1) / this.totalQuestions) * 100}%`;
        document.getElementById('progressText').textContent = 
            `Câu ${this.currentQuestion + 1}/${this.totalQuestions}`;
        
        // Update question info
        document.getElementById('categoryBadge').textContent = question.category;
        document.getElementById('questionTitle').textContent = 
            `Câu ${this.currentQuestion + 1}/${this.totalQuestions}`;
        
        // Update code
        document.getElementById('codeBlock').textContent = question.code;
        
        // Update question
        document.getElementById('questionText').textContent = question.question;
        
        // Update options
        question.options.forEach((option, index) => {
            document.querySelector(`[data-option="${index}"] .option-text`).textContent = option;
        });
        
        // Reset UI
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected', 'correct', 'incorrect');
        });
        
        // Restore user answer if exists
        if (this.userAnswers[this.currentQuestion] !== null) {
            const selectedOption = document.querySelector(`[data-option="${this.userAnswers[this.currentQuestion]}"]`);
            selectedOption.classList.add('selected');
        }
        
        // Reset buttons - Always enable show answer button
        document.getElementById('showAnswerBtn').disabled = false;
        document.getElementById('nextBtn').classList.add('hidden');
        
        // Hide hint tooltip and explanation
        document.getElementById('hintTooltip').classList.add('hidden');
        document.getElementById('explanationContainer').classList.add('hidden');
        
        // Reset show answer state
        this.showAnswer = false;
        document.getElementById('showAnswerBtn').textContent = '👁️ Xem đáp án';
    }
    
    showHint() {
        const question = this.questions[this.currentQuestion];
        const tooltip = document.getElementById('hintTooltip');
        const content = document.querySelector('.hint-content');
        
        content.textContent = question.hint;
        tooltip.classList.remove('hidden');
        
        // Hide after 3 seconds
        setTimeout(() => {
            tooltip.classList.add('hidden');
        }, 3000);
    }
    
    updateAnswerDisplay() {
        const question = this.questions[this.currentQuestion];
        const showAnswerBtn = document.getElementById('showAnswerBtn');
        const explanationContainer = document.getElementById('explanationContainer');
        
        if (this.showAnswer) {
            showAnswerBtn.textContent = '👁️ Ẩn đáp án';
            
            // Show explanation
            document.getElementById('explanationText').textContent = question.explanation;
            explanationContainer.classList.remove('hidden');
            
            // Highlight correct answer
            document.querySelectorAll('.option').forEach((opt, index) => {
                opt.classList.remove('correct', 'incorrect');
                if (index === question.correct) {
                    opt.classList.add('correct');
                } else if (this.userAnswers[this.currentQuestion] === index) {
                    opt.classList.add('incorrect');
                }
            });
        } else {
            showAnswerBtn.textContent = '👁️ Xem đáp án';
            
            // Hide explanation
            explanationContainer.classList.add('hidden');
            
            // Remove highlighting
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('correct', 'incorrect');
            });
        }
    }
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});