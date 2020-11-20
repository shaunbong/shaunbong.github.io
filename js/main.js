const uploadBtn = document.getElementById('upload-btn')
const result = document.getElementById('res')


uploadBtn.addEventListener('click', e => {
    console.log('hi')
    setTimeout(addImage,2000)
})

function addImage() {
    const result = document.getElementById('res')
    result.innerHTML = '<img id="demo-img" src="https://goodfellas-rekognition.s3.amazonaws.com/demo/segmented_0271c3e8e4.jpg" alt=""></img><h4 id="result-class">Water Damage Classification: Mould</h4><h4 id="result-decision">Confidence: 87%</h4><h4 id="result-decision">Claim Status: Conditionally Approved</h4>'
    
}