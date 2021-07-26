for i in range(0, 9999):
	if i % 2 == 0:
		with open(str(i) + ".js", "w") as f:
			f.write("""export default function handler(req, res) {
	res.status(200).json({ iseven: 'true' })
}""")
	else:
		with open(str(i) + ".js", "w") as f:
			f.write("""export default function handler(req, res) {
	res.status(200).json({ iseven: 'false' })
}""")