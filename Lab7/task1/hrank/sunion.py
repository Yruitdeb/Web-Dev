n_english = int(input())
english_subs = set(map(int, input().split()))

n_french = int(input())
french_subs = set(map(int, input().split()))

all_subs = english_subs.union(french_subs)

print(len(all_subs))
