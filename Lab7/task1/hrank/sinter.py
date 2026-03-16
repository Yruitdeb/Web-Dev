n_english = int(input())
english_subs = set(map(int, input().split()))

n_french = int(input())
french_subs = set(map(int, input().split()))

both_subs = english_subs.intersection(french_subs)

print(len(both_subs))
