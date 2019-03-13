## homogeneity_completeness_v_measure()
https://scikit-learn.org/stable/modules/generated/sklearn.metrics.homogeneity_completeness_v_measure.html#sklearn.metrics.homogeneity_completeness_v_measure

https://scikit-learn.org/stable/modules/generated/sklearn.metrics.homogeneity_completeness_v_measure.html

homogeneity(均質性、同質性、均一性）  
https://scikit-learn.org/stable/modules/generated/sklearn.metrics.homogeneity_score.html

値範囲0~1  
値が1だと完全に均一性の取れたラベリングであるといえる  
https://www.e-stat.go.jp/classifications/terms/90/00/4024
https://www.haya-programming.com/entry/2018/03/15/070029
クラスタの中身が特定の正解ラベルに偏っているならば値は1、まんべんなくすべての正解ラベルを含んでいれば0、1に近いほど良いという性質の評価指標になる？  

completeness（完全性）   
https://scikit-learn.org/stable/modules/generated/sklearn.metrics.completeness_score.html#sklearn.metrics.completeness_score

値範囲0~1  
特定のクラスのメンバーであるすべてのデータポイントが同じクラスターの要素である場合、クラスタリング結果は完全性を満たす(値が1になる)  

v_measure  
https://scikit-learn.org/stable/modules/generated/sklearn.metrics.v_measure_score.html#sklearn.metrics.v_measure_score

https://scikit-learn.org/stable/modules/generated/sklearn.metrics.normalized_mutual_info_score.html#sklearn.metrics.normalized_mutual_info_score


v = 2 * （均質性 * 完全性） / （均質性 + 完全性）  
均質性と完全性のどちらもいい結果であれば１に近くなる  


true : [0, 0, 1, 1]  
pred: [0, 1, 2, 3]  
homogeneity ⇒ 1 一つのクラスタに属するクラスに偏りがあるので1(どのクラスタも1種類のクラスしか入ってない)  
completenes ⇒ クラスメンバが異なるクラスタにまたがっているので0に近くなる  
v_measure   ⇒ homogeneityはよくてもcompletenessが悪いのでこの値も悪くなる  
